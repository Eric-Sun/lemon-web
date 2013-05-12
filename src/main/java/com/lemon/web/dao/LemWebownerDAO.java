package com.lemon.web.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import com.lemon.web.core.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.lemon.web.dto.LemWebownerDTO;

@Repository
public class LemWebownerDAO {

    @Autowired
    JdbcTemplate j;

    public LemWebownerDTO login(String username, String password) {
        String sql = "SELECT * FROM lem_webowner WHERE username=? AND password=MD5(?)";
        List<LemWebownerDTO> list = j.query(sql, new Object[]{username,
                password}, new BeanPropertyRowMapper(LemWebownerDTO.class));

        if (list == null || list.size() == 0)
            return null;
        else
            return list.get(0);
    }

    public void create(final String username, final String password, final String truename,
                       final String gender, final String email, final String telephone, final String mobile,
                       final String identity, final String address, final String qq, final String sitename,
                       final String siteurl, final int sitetype, final String banktype, final String province,
                       final String city, final String bankaddr, final String bankcard, final String account,
                       final String status, final String regip, final String flag, final String beian) {
        KeyHolder holder = new GeneratedKeyHolder();
        final String sql = "insert into lem_webowner(username, password, truename, gender, email, telephone, mobile, identity, address, qq, sitename, siteurl, sitetype, banktype, province, city, bankaddr, bankcard, account, status, offnum, offbase, freenum, regtime, regip, flag) values(?,MD5(?), ?,?, ?,?,?,?,?,?,?, ?,?, ?,?, ?,?, ?,?, ?,?,?,?,now(),?,?)";
        j.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement pstmt = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);
                pstmt.setString(1, username);
                pstmt.setString(2, password);
                pstmt.setString(3, truename);
                pstmt.setString(4, gender);
                pstmt.setString(5, email);
                pstmt.setString(6, telephone);
                pstmt.setString(7, mobile);
                pstmt.setString(8, identity);
                pstmt.setString(9, address);
                pstmt.setString(10, qq);
                pstmt.setString(11, sitename);
                pstmt.setString(12, siteurl);
                pstmt.setInt(13, sitetype);
                pstmt.setString(14, banktype);
                pstmt.setString(15, province);
                pstmt.setString(16, city);
                pstmt.setString(17, bankaddr);
                pstmt.setString(18, bankcard);
                pstmt.setString(19, account);
                pstmt.setString(20, status);
                pstmt.setInt(21, 0);
                pstmt.setInt(22, 0);
                pstmt.setInt(23, 0);
                pstmt.setString(24, regip);
                pstmt.setString(25, flag);

                return pstmt;
            }
        }, holder);
        long wid = holder.getKey().longValue();
        String siteSql = "insert lem_webowner_site(sitename, siteurl, sitetype, beian, status, createtime) values(?, ?, ?, ?, ?, now())";
        Object[] siteParms = {sitename, siteurl, sitetype, beian, 0};
        j.update(siteSql, siteParms);

        for (String p : Constants.provinceMap.keySet()) {
            String s = "insert into webowner_province (wid,province) values(?,?)";
            j.update(s, new Object[]{wid, p});
        }
    }

    public LemWebownerDTO get(long wid) {
        String sql = "SELECT * FROM lem_webowner WHERE wid=?";
        List<LemWebownerDTO> list = j.query(sql, new Object[]{wid},
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
        j.update(s1, new Object[]{mobile, telephone, truename,
                address, qq, wid});

    }

    public boolean modify2(long wid, String oldpwd, String newpwd, String newpwd2) {
        String s1 = "SELECT count(1) FROM lem_webowner WHERE wid=? AND password=MD5(?)";
        int cnt = j.queryForInt(s1, new Object[]{wid, oldpwd});
        if (cnt > 0) {
            // should modify
            String s2 = "UPDATE lem_webowner SET password=MD5(?) WHERE wid=?";
            j.update(s2, new Object[]{newpwd, wid});
            return true;
        } else {
            return false;
        }
    }

}
