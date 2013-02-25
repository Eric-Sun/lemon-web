package com.lemon.web.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.lemon.web.dto.LemIvrInfoDTO;

@Repository
public class LemIvrInfoDAO {

	@Autowired
	JdbcTemplate j;

	public List<LemIvrInfoDTO> ivrInfoList(long wid) {
		String sql = "SELECT ivrnum, orderdest, status, subtime FROM lem_ivr_info WHERE wid=?";
		return j.query(sql, new Object[] {wid}, new BeanPropertyRowMapper(
				LemIvrInfoDTO.class));
	}

}
