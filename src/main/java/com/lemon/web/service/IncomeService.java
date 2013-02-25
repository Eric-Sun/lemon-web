package com.lemon.web.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lemon.web.dao.LemIvrDetailDAO;
import com.lemon.web.dao.LemIvrInfoDAO;
import com.lemon.web.dao.LemWebownerBillDAO;
import com.lemon.web.dao.LemWebownerSiteDAO;
import com.lemon.web.dto.LemIvrDetailDTO;
import com.lemon.web.dto.LemIvrInfoDTO;
import com.lemon.web.dto.LemWebownerBillDTO;
import com.lemon.web.dto.MySiteDTO;

@Service
public class IncomeService {

	@Autowired
	LemWebownerBillDAO billDAO;

	@Autowired
	LemIvrDetailDAO ivrDAO;

	@Autowired
	LemWebownerSiteDAO siteDAO;

	@Autowired
	LemIvrInfoDAO ivrInfoDAO;

	public float queryNoPaySum(long wid) {
		return billDAO.queryNoPaySum(wid);
	}

	public int queryCount(long wid) {
		return billDAO.queryCount(wid);
	}

	public List<LemWebownerBillDTO> queryBill(long wid, int pageNum,
			int pageSize) {
		return billDAO.queryBill(wid, pageNum, pageSize);
	}

	public float getYesterdayIncome(long wid) {
		Date cur = new Date();
		Date yes = new Date(cur.getTime() - 24 * 60 * 60 * 1000L);
		return billDAO.queryIncome(wid, yes);
	}

	public float queryIvrIncome(long wid) {
		return ivrDAO.sum(wid, new Date());
	}

	public List<LemIvrDetailDTO> queryIvrDetail(long wid, int pageNum,
			int pageSize) {
		return ivrDAO.list(wid, new Date(), pageNum, pageSize);
	}

	public List<MySiteDTO> sitesList(long wid) {
		return siteDAO.siteList(wid);
	}

	public List<LemIvrInfoDTO> ivrInfoList(long wid) {
		return ivrInfoDAO.ivrInfoList(wid);
	}

	public void createsite(long wid, String siteName, String siteDomain,
			int siteType, String beian) {
		siteDAO.create(wid, siteName, siteDomain, siteType, beian);
	}

}
