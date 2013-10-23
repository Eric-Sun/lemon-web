package com.lemon.web.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

/**
 * Created with IntelliJ IDEA.
 * User: sunbo
 * Date: 13-6-5
 * Time: 下午6:26
 * To change this template use File | Settings | File Templates.
 */
@Controller
public class DownloadController {

    @Value("${text.path}")
    String path;

    @RequestMapping(value = "/download")
    public ModelAndView getLastMobile(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String name = request.getParameter("id");
        response.setContentType("application/octet-stream");
        if (name.equals("0"))
            name = "Foxmail_for_Mac_V1.1.0.dmg";
        else
            name = "fm70chb1_92_setup.exe";
        response.setHeader("Content-Disposition", "attachment;filename=" + name);
        String filePath = path + File.separator + name;
        FileInputStream fis = new FileInputStream(new File(filePath));
        byte[] buffer = new byte[fis.available()];
        fis.read(buffer);
        fis.close();
        OutputStream os = response.getOutputStream();
        os.write(buffer);
        os.flush();
        os.close();
        return null;
    }
}
