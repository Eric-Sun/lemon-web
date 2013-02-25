package com.lemon.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lemon.web.dao.LemWebownerDAO;
import com.lemon.web.dto.LemWebownerDTO;

@Service
public class UserService {

	@Autowired
	LemWebownerDAO wdao;

	public LemWebownerDTO login(String username, String password) {
		return wdao.login(username, password);
	}

	public LemWebownerDTO get(long wid) {
		return wdao.get(wid);
	}

	public void create(String username, String password, String truename,
			String gender, String email, String telephone, String mobile,
			String identity, String address, String qq, String sitename,
			String siteurl, int sitetype, String banktype, String province,
			String city, String bankaddr, String bankcard, String account,
			String status, String regip, String flag, String beian) {
		wdao.create(username, password, truename, gender, email, telephone,
				mobile, identity, address, qq, sitename, siteurl, sitetype,
				banktype, province, city, bankaddr, bankcard, account, status,
				regip, flag, beian);

	}

	public void modify1(long wid, String truename, String address,
			String telephone, String mobile, String qq) {
		wdao.modify1(wid, truename, address, telephone, mobile, qq);
	}

	public boolean modify2(long wid, String oldpwd, String newpwd, String newpwd2) {
		return wdao.modify2(wid, oldpwd, newpwd, newpwd2);
	}

}
