package com.lemon.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.lemon.web.dto.LemWebownerDTO;
import com.lemon.web.service.UserService;

@Controller
public class UserController {

	@Autowired
	UserService userService;

	@RequestMapping("/user/login")
	public ModelAndView login(HttpServletRequest request,
			HttpServletResponse response) {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		LemWebownerDTO owner = userService.login(username, password);
		if (owner != null) {
			request.getSession().setAttribute("username", username);
			request.getSession().setAttribute("wid", owner.getWid());
			ModelAndView mav = new ModelAndView("forward:/index");
			return mav;
		}
		return new ModelAndView("/index");
	}

	@RequestMapping("/regist")
	public ModelAndView registerIndex(HttpServletRequest request,
			HttpServletResponse response) {
		if (request.getSession().getAttribute("username") != null) {
			ModelAndView mav = new ModelAndView("/user");
			return mav;
		}
		ModelAndView mav = new ModelAndView("/regist/index");
		return mav;
	}

	@RequestMapping("/regist/step2")
	public ModelAndView registerStep2(HttpServletRequest request,
			HttpServletResponse response) {
		ModelAndView mav = new ModelAndView("/regist/step2");
		return mav;
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String register(HttpServletRequest request,
			HttpServletResponse response) {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String truename = request.getParameter("truename");
		String gender = request.getParameter("gender");
		String identity = request.getParameter("identity");
		String address = request.getParameter("address");
		String telephone = request.getParameter("telephone");
		String mobile = request.getParameter("mobile");
		String email = request.getParameter("email");
		String qq = request.getParameter("qq");
		String sitename = request.getParameter("sitename");
		String siteurl = request.getParameter("siteurl");
		int sitetype = new Integer(request.getParameter("sitetype"));
		String beian = request.getParameter("beian");
		String banktype = request.getParameter("banktype");
		String bankcard = request.getParameter("bankcard");
		String province = request.getParameter("province");
		String city = request.getParameter("city");
		String account = request.getParameter("account");
		String bankaddr = request.getParameter("bankaddr");
		int offbase = 7;
		int offnum = 1;
		int freenum = 15;
		int status = 0;
		int flag = 1;
		String regip = request.getRemoteAddr();

		userService.create(username, password, truename, gender, email,
				telephone, mobile, identity, address, qq, sitename, siteurl,
				sitetype, banktype, province, city, bankaddr, bankcard,
				account, status + "", regip, flag + "", beian);

		return "/index";
	}

	@RequestMapping("/logout")
	public String logout(HttpServletRequest request,
			HttpServletResponse response) {
		request.getSession().removeAttribute("wid");
		request.getSession().removeAttribute("username");
		return "forward:/index";
	}

	@RequestMapping("/user/modify1")
	public ModelAndView modifyUser1(HttpServletRequest request,
			HttpServletResponse reopnse) {
		if(request.getSession().getAttribute("wid")==null)
			return new ModelAndView("forward:/index");
		long wid = new Long(request.getSession().getAttribute("wid").toString());
		String truename = request.getParameter("truename");
		String address = request.getParameter("address");
		String telephone = request.getParameter("telephone");
		String mobile = request.getParameter("mobile");
		String qq = request.getParameter("qq");
		userService.modify1(wid, truename, address, telephone, mobile, qq);
		ModelAndView mav = new ModelAndView("forward:/user/userinfo");
		return mav;
	}

	@RequestMapping("/user/modify2")
	public ModelAndView modifyUser2(HttpServletRequest request,
			HttpServletResponse reopnse) {
		if(request.getSession().getAttribute("wid")==null)
			return new ModelAndView("forward:/index");
		long wid = new Long(request.getSession().getAttribute("wid").toString());
		String oldpwd = request.getParameter("oldpwd");
		String newpwd = request.getParameter("newpwd");
		String newpwd2 = request.getParameter("newpwd2");
		if (userService.modify2(wid, oldpwd, newpwd, newpwd2)) {
			ModelAndView mav = new ModelAndView("forward:/logout");
			return mav;
		} else {
			ModelAndView mav = new ModelAndView("forward:/logout");
			return mav;
		}
	}

	@RequestMapping("/user/changepwd")
	public String changepwd(HttpServletRequest request,
			HttpServletResponse reopnse) {
		return "/user/changepwd";
	}

}
