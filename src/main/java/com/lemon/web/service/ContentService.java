package com.lemon.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lemon.web.dao.LemNewsDAO;
import com.lemon.web.dao.LemProductDAO;
import com.lemon.web.dto.AboutDTO;
import com.lemon.web.dto.IndexTabDTO;
import com.lemon.web.dto.LemNewsDTO;
import com.lemon.web.dto.LemProductDTO;

@Service
public class ContentService {

	@Autowired
	LemNewsDAO newsDAO;

	@Autowired
	LemProductDAO productDAO;

	public AboutDTO about() {
		AboutDTO dto = new AboutDTO();
		List<LemNewsDTO> list = newsDAO.getByIds(new Long[] { 64L, 65L, 66L,
				67L });
		LemNewsDTO d0 = list.get(0);
		LemNewsDTO d1 = list.get(1);
		LemNewsDTO d2 = list.get(2);
		LemNewsDTO d3 = list.get(3);
		dto.setAboutUs(d0.getContent());
		dto.setServices(d1.getContent());
		dto.setCustomer(d2.getContent());
		dto.setCooperation(d3.getContent());
		return dto;
	}

	public LemNewsDTO news(long id) {
		LemNewsDTO dto = newsDAO.getByIds(new Long[] { id }).get(0);
		return dto;
	}

	public List<LemNewsDTO> newslist() {
		List<LemNewsDTO> list = newsDAO.list(1, 20);
		return list;
	}

	public List<LemNewsDTO> getLast4News() {
		List<LemNewsDTO> list = newsDAO.listLast4();
		return list;
	}

	public List<LemProductDTO> getLast2Product() {
		List<LemProductDTO> list = productDAO.listLast2();
		return list;
	}

	public IndexTabDTO indexTabInfo() {
		IndexTabDTO dto = new IndexTabDTO();
		List<LemNewsDTO> list = newsDAO.getByIds(new Long[] { 68L, 69L, 70L,
				71L });
		LemNewsDTO d0 = list.get(0);
		LemNewsDTO d1 = list.get(1);
		LemNewsDTO d2 = list.get(2);
		LemNewsDTO d3 = list.get(3);
		dto.setOrigin1(d0.getOrigin());
		dto.setOrigin2(d1.getOrigin());
		dto.setOrigin3(d2.getOrigin());
		dto.setOrigin4(d3.getOrigin());
		dto.setTitle1(d0.getTitle());
		dto.setTitle2(d1.getTitle());
		dto.setTitle3(d2.getTitle());
		dto.setTitle4(d3.getTitle());
		dto.setLink1(d0.getLink());
		dto.setLink2(d1.getLink());
		dto.setLink3(d2.getLink());
		dto.setLink4(d3.getLink());
		return dto;
	}

	public List<LemNewsDTO> hangyezixun() {
		List<LemNewsDTO> list = newsDAO.hangyezixun();
		return list;
	}

	public LemNewsDTO kf() {
		LemNewsDTO dto = newsDAO.getByIds(new Long[] { 13L }).get(0);
		return dto;
	}
}
