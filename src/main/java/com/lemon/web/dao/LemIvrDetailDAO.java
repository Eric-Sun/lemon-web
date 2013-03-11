package com.lemon.web.dao;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.lemon.web.dto.LemIvrDetailDTO;

@Repository
public class LemIvrDetailDAO {

    @Autowired
    JdbcTemplate j;

    public float sum(long wid, Date date) {
        String sql = "SELECT ifnull(sum(feeincome),0) AS totalIncome FROM lez_ivr_detail WHERE wid=?"
                + " AND feeflag=1 AND subtime >= ?";
        return j.queryForObject(sql, new Object[]{wid, date}, Float.class);
    }

    public List<LemIvrDetailDTO> list(long wid, Date date, int pageNum,
                                      int pageSize) {
        String sql = "SELECT channel, orderdest, total, feeincome, subtime FROM lez_ivr_detail WHERE wid=?"
                + " AND feeflag=1 AND subtime >= ?"
                + " ORDER BY subtime DESC LIMIT "
                + (pageNum - 1)
                * pageSize
                + "," + pageSize;

        return j.query(sql, new Object[]{wid, date},
                new BeanPropertyRowMapper(LemIvrDetailDTO.class));
    }

    public int listCount(long wid, Date date) {
        String sql = "SELECT ifnull(count(*),0) FROM lez_ivr_detail WHERE wid=?"
                + " AND feeflag=1 AND subtime >= ?"
                + " ";

        return j.queryForInt(sql, new Object[]{wid, date});
    }
}
