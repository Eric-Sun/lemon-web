package com.lemon.web.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.lemon.web.dto.LemProductDTO;

@Repository
public class LemProductDAO {

	@Autowired
	JdbcTemplate j;

	public List<LemProductDTO> listLast2() {
		String sql = "select * from lem_product where status = 1 AND deleted = 0 limit 2";
		return j.query(sql, new Object[] {}, new BeanPropertyRowMapper(
				LemProductDTO.class));
	}
	
	
}
