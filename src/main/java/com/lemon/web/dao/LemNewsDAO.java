package com.lemon.web.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.lemon.web.dto.LemNewsDTO;

@Repository
public class LemNewsDAO {

	@Autowired
	JdbcTemplate j;

	public List<LemNewsDTO> list(int pageNum, int pageSize) {
		String sql = "select * from lem_news WHERE status = 1 AND deleted = 0 ORDER BY flag DESC, createtime DESC limit "
				+ +(pageNum - 1) * pageSize + "," + pageSize;
		return j.query(sql, new Object[] {}, new BeanPropertyRowMapper(
				LemNewsDTO.class));
	}

	public List<LemNewsDTO> getByIds(Long[] ids) {
		StringBuilder sb = new StringBuilder();
		for (long id : ids) {
			sb.append(id + ",");
		}
		String idstr = sb.substring(0, sb.length() - 1);
		String sql = "select * from lem_news WHERE id in(" + idstr + ")";
		return j.query(sql, new Object[] {}, new BeanPropertyRowMapper(
				LemNewsDTO.class));
	}

	public List<LemNewsDTO> listLast4() {
		String sql = "select * from lem_news WHERE status = 1 AND deleted = 0 ORDER BY flag DESC, createtime DESC limit 4";
		return j.query(sql, new Object[] {}, new BeanPropertyRowMapper(
				LemNewsDTO.class));
	}

	public List<LemNewsDTO> hangyezixun() {
		String sql = "select * from lem_news WHERE status = 1 AND deleted = 0 AND catalogid = 'qquujv001' ORDER BY createtime DESC LIMIT 8";
		return j.query(sql, new Object[] {}, new BeanPropertyRowMapper(
				LemNewsDTO.class));
	}
}
