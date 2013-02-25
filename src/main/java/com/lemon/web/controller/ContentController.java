package com.lemon.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.lemon.web.dto.AboutDTO;
import com.lemon.web.dto.IndexTabDTO;
import com.lemon.web.dto.LemNewsDTO;
import com.lemon.web.dto.LemProductDTO;
import com.lemon.web.service.ContentService;

@Controller
@RequestMapping("/")
public class ContentController {
	@Autowired
	ContentService contentService;

	@RequestMapping("/about")
	public ModelAndView about(HttpServletRequest request,
			HttpServletResponse response) {
		AboutDTO dto = contentService.about();
		ModelAndView mav = new ModelAndView("/about");
		mav.addObject("AboutDTO", dto);
		return mav;
	}

	@RequestMapping("/news")
	public ModelAndView news(HttpServletRequest request,
			HttpServletResponse response) {
		long id = new Long(request.getParameter("id"));
		LemNewsDTO dto = contentService.news(id);
		ModelAndView mav = new ModelAndView("/news");
		mav.addObject("LemNewsDTO", dto);
		return mav;
	}
	

	@RequestMapping("/faq")
	public ModelAndView faq(HttpServletRequest request,
			HttpServletResponse response) {
		ModelAndView mav = new ModelAndView("/faq");
		return mav;
	}


	@RequestMapping("/newslist")
	public ModelAndView newslist(HttpServletRequest request,
			HttpServletResponse response) {
		List<LemNewsDTO> list = contentService.newslist();
		ModelAndView mav = new ModelAndView("/newslist");
		LemNewsDTO kf = contentService.kf();
		mav.addObject("list", list);
		mav.addObject("kf", kf);
		return mav;
	}

	@RequestMapping("/index")
	public ModelAndView index(HttpServletRequest request,
			HttpServletResponse response) {
		List<LemProductDTO> pdto = contentService.getLast2Product();
		for( LemProductDTO d : pdto){
			if( d.getThumbnail().startsWith("/"))
				d.setThumbnail(d.getThumbnail().substring(1));
		}
		List<LemNewsDTO> ndto = contentService.getLast4News();
		IndexTabDTO tdto = contentService.indexTabInfo();
		List<LemNewsDTO> hangye = contentService.hangyezixun();
		LemNewsDTO kf = contentService.kf();
		ModelAndView mav = new ModelAndView("/index");
		mav.addObject("pdto", pdto);
		mav.addObject("ndto", ndto);
		mav.addObject("tdto", tdto);
		mav.addObject("hangye", hangye);
		mav.addObject("kf", kf);
		return mav;
	}
	

}
