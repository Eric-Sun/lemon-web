package com.lemon.web.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.lemon.web.dto.LemWebownerDTO;

@Repository
public class LemWebownerDAO {

	@Autowired
	JdbcTemplate j;

	public LemWebownerDTO login(String username, String password) {
		String sql = "SELECT * FROM lem_webowner WHERE username=? AND password=MD5(?)";
		List<LemWebownerDTO> list = j.query(sql, new Object[] { username,
				password }, new BeanPropertyRowMapper(LemWebownerDTO.class));

		if (list == null || list.size() == 0)
			return null;
		else
			return list.get(0);
	}

	public void create(String username, String password, String truename,
			String gender, String email, String telephone, String mobile,
			String identity, String address, String qq, String sitename,
			String siteurl, int sitetype, String banktype, String province,
			String city, String bankaddr, String bankcard, String account,
			String status, String regip, String flag, String beian) {
		String sql = "insert into lem_webowner(username, password, truename, gender, email, telephone, mobile, identity, address, qq, sitename, siteurl, sitetype, banktype, province, city, bankaddr, bankcard, account, status, offnum, offbase, freenum, regtime, regip, flag) values(?,MD5(?), ?,?, ?,?,?,?,?,?,?, ?,?, ?,?, ?,?, ?,?, ?,?,?,?,now(),?,?)";
		Object[] params = { username, password, truename, gender, email,
				telephone, mobile, identity, address, qq, sitename, siteurl,
				sitetype, banktype, province, city, bankaddr, bankcard,
				account, status, 0, 0, 0, regip, flag };
		j.update(sql, params);

		String siteSql = "insert lem_webowner_site(sitename, siteurl, sitetype, beian, status, createtime) values(?, ?, ?, ?, ?, now())";
		Object[] siteParms = { sitename, siteurl, sitetype, beian, 0 };
		j.update(siteSql, siteParms);
	}

	public LemWebownerDTO get(long wid) {
		String sql = "SELECT * FROM lem_webowner WHERE wid=?";
		List<LemWebownerDTO> list = j.query(sql, new Object[] { wid },
				new BeanPropertyRowMapper(LemWebownerDTO.class));

		if (list == null || list.size() == 0)
			return null;
		else
			return list.get(0);
	}

	public void modify1(long wid, String truename, String address,
			String telephone, String mobile, String qq) {
		String s1 = "UPDATE lem_webowner SET mobile=?,"
				+ "telephone=?, truename=?, address=?, qq=? WHERE wid=?";
		j.update(s1, new Object[] { mobile, telephone, truename,
				address, qq, wid });

	}

	public boolean modify2(long wid, String oldpwd, String newpwd, String newpwd2) {
		String s1 = "SELECT count(1) FROM lem_webowner WHERE wid=? AND password=MD5(?)";
		int cnt = j.queryForInt(s1, new Object[] { wid, oldpwd });
		if (cnt > 0) {
			// should modify
			String s2 = "UPDATE lem_webowner SET password=MD5(?) WHERE wid=?";
			j.update(s2, new Object[] { newpwd, wid });
			return true;
		}else{
			return false;
		}
	}

}
