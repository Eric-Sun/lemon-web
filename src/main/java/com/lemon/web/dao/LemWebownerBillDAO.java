package com.lemon.web.dao;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.lemon.web.dto.LemWebownerBillDTO;

@Repository
public class LemWebownerBillDAO {

	@Autowired
	JdbcTemplate j;

	public float queryNoPaySum(long wid) {
		String sql = "SELECT ifnull(sum(showincome),0) as show_income FROM lez_webowner_bill WHERE wid=? AND payflag=0";
		return j.queryForObject(sql, new Object[] { wid }, Float.class);
	}

	public float queryIncome(long wid, Date date) {
		String sql = "SELECT ifnull(sum(showincome),0) as last_income FROM lez_webowner_bill WHERE wid=? AND billdate=?";
		return j.queryForObject(sql, new Object[] { wid, date }, Float.class);
	}

	public int queryCount(long wid) {
		String sql = "SELECT count(*) as count FROM lez_webowner_bill WHERE wid=?";
		return j.queryForInt(sql, new Object[] { wid });
	}

	public List<LemWebownerBillDTO> queryBill(long wid, int pageNum,
			int pageSize) {
		String sql = "SELECT billdate, showcount, showincome, payflag, paytime FROM lez_webowner_bill WHERE wid=? ORDER BY subtime DESC LIMIT "
				+ (pageNum - 1) * pageSize + "," + pageSize;
		return j.query(sql, new Object[] { wid }, new BeanPropertyRowMapper(
				LemWebownerBillDTO.class));
	}

	
}
