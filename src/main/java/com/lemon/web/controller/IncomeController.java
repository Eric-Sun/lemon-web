package com.lemon.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lemon.web.tool.Page;
import com.lemon.web.tool.PageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.lemon.web.dto.LemIvrDetailDTO;
import com.lemon.web.dto.LemIvrInfoDTO;
import com.lemon.web.dto.LemWebownerBillDTO;
import com.lemon.web.dto.LemWebownerDTO;
import com.lemon.web.dto.MySiteDTO;
import com.lemon.web.service.IncomeService;
import com.lemon.web.service.UserService;

@Controller
public class IncomeController {
    private static int pageSize = 15;

    @Autowired
    IncomeService incomeService;

    @Autowired
    UserService userService;

    @RequestMapping("/user/index")
    public ModelAndView index(HttpServletRequest request,
                              HttpServletResponse response) {
        if (request.getSession().getAttribute("wid") == null)
            return new ModelAndView("forward:/");
        long wid = new Long(request.getSession().getAttribute("wid").toString());
        int pageNum = 1;
        if (request.getParameter("pageNum") != null) {
            pageNum = new Integer(request.getParameter("pageNum"));
        }
        List<LemWebownerBillDTO> billList = incomeService.queryBill(wid,
                pageNum, pageSize);
        int count = incomeService.queryCount(wid);
        float noPayIncome = incomeService.queryNoPaySum(wid);
        float yesterdayIncome = incomeService.getYesterdayIncome(wid);
        ModelAndView mav = new ModelAndView("/user/index");
        mav.addObject("billList", billList);
        mav.addObject("count", count);
        mav.addObject("noPayIncome", noPayIncome);
        mav.addObject("yesterdayIncome", yesterdayIncome);
        return mav;
    }

    @RequestMapping("/user/ordertoday")
    public ModelAndView orderToday(HttpServletRequest request,
                                   HttpServletResponse response) {
        if (request.getSession().getAttribute("wid") == null)
            return new ModelAndView("forward:/");
        long wid = new Long(request.getSession().getAttribute("wid").toString());
        int pageNum = 1;
        if (request.getParameter("pageNum") != null) {
            pageNum = new Integer(request.getParameter("pageNum"));
        }
        float income = incomeService.queryIvrIncome(wid);
        List<LemIvrDetailDTO> detailList = incomeService.queryIvrDetail(wid,
                pageNum, pageSize);
        int count = incomeService.queryIvrDetailCount(wid);

        ModelAndView mav = new ModelAndView("/user/ordertoday");
        Page<LemIvrDetailDTO> page = PageUtil.getPage(count, pageNum, detailList, pageSize);
        mav.addObject("pageHtml", PageUtil.toPageHtml(page, request.getRequestURI(), request.getQueryString()));
        mav.addObject("income", income);
        mav.addObject("detailList", detailList);
        return mav;
    }

    @RequestMapping("/user/createsite")
    public ModelAndView createsite(HttpServletRequest request,
                                   HttpServletResponse response) {
        if (request.getSession().getAttribute("wid") == null)
            return new ModelAndView("forward:/");
        long wid = new Long(request.getSession().getAttribute("wid").toString());
        String siteName = request.getParameter("sitename");
        String siteDomain = request.getParameter("siteurl");
        int siteType = new Integer(request.getParameter("sitetype"));
        String beian = request.getParameter("beian");

        incomeService.createsite(wid, siteName, siteDomain, siteType, beian);

        ModelAndView mav = new ModelAndView("/user/addresult");
        return mav;
    }

    @RequestMapping("/user/mysites")
    public ModelAndView mysites(HttpServletRequest request,
                                HttpServletResponse response) {
        if (request.getSession().getAttribute("wid") == null)
            return new ModelAndView("forward:/");
        long wid = new Long(request.getSession().getAttribute("wid").toString());
        List<MySiteDTO> siteList = incomeService.sitesList(wid);

        ModelAndView mav = new ModelAndView("/user/mysites");
        mav.addObject("siteList", siteList);
        return mav;
    }

    @RequestMapping("/user/ivr")
    public ModelAndView ivr(HttpServletRequest request,
                            HttpServletResponse response) {
        if (request.getSession().getAttribute("wid") == null)
            return new ModelAndView("forward:/");
        long wid = new Long(request.getSession().getAttribute("wid").toString());
        List<LemIvrInfoDTO> ivrList = incomeService.ivrInfoList(wid);

        ModelAndView mav = new ModelAndView("/user/ivr");
        mav.addObject("ivrList", ivrList);
        return mav;
    }

    @RequestMapping("/user/userinfo")
    public ModelAndView userinfo(HttpServletRequest request,
                                 HttpServletResponse response) {
        if (request.getSession().getAttribute("wid") == null)
            return new ModelAndView("forward:/");
        long wid = new Long(request.getSession().getAttribute("wid").toString());
        LemWebownerDTO owner = userService.get(wid);
        ModelAndView mav = new ModelAndView("/user/userinfo");
        mav.addObject("dto", owner);
        return mav;
    }

    @RequestMapping("/user/finance")
    public ModelAndView finance(HttpServletRequest request,
                                HttpServletResponse response) {
        if (request.getSession().getAttribute("wid") == null)
            return new ModelAndView("forward:/");
        long wid = new Long(request.getSession().getAttribute("wid").toString());
        LemWebownerDTO owner = userService.get(wid);
        ModelAndView mav = new ModelAndView("/user/finance");
        mav.addObject("dto", owner);
        return mav;
    }

}
