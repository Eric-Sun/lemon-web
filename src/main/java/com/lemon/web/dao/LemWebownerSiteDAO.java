package com.lemon.web.dao;

import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.lemon.web.dto.MySiteDTO;

@Repository
public class LemWebownerSiteDAO {

	@Autowired
	JdbcTemplate j;

	public List<MySiteDTO> siteList(long wid) {
		String sql = "SELECT sitename, siteurl, status, createtime FROM lem_webowner_site WHERE wid=?"
				+ " AND siteurl<>'test.lemontest.t'";
		return j.query(sql, new Object[] { wid }, new BeanPropertyRowMapper(
				MySiteDTO.class));
	}

	public void create(long wid, String siteName, String siteDomain,
			int siteType, String beian) {
		String sql = "INSERT INTO lem_webowner_site(wid, sitename, siteurl, sitetype, beian, status, createtime) "
				+ "VALUES(?, ?,?,?,?, 0, now())";
		j.update(sql,
				new Object[] { wid, siteName, siteDomain, siteType, beian });

	}

}
