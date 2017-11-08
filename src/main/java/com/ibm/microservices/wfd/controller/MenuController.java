package com.ibm.microservices.wfd.controller;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.lang.Object;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.boot.json.BasicJsonParser;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Configuration
@ConfigurationProperties(prefix = "wfd.menu")
@Controller
public class MenuController {

  private static final Log log = LogFactory.getLog(MenuController.class);

  @Autowired
  private RestTemplate restTemplate;

  @Value("${wfd.menu.url}")
  private String menu;

  @RequestMapping("/")
  public String getMenuForIndex(Model model){

    //String menuString = this.restTemplate.getForObject(this.menu, String.class);
    String menuString = this.getMenu();
    log.info(menuString);

    BasicJsonParser jsonParser = new BasicJsonParser();
    Map<String, Object> jsonMap = jsonParser.parseMap(menuString);

    List<String> appetizerOptions = (List<String>)((Map<String, Object>)jsonMap.get("appetizers")).get("menu");
    model.addAttribute("appetizerOptions", appetizerOptions);

    List<String> entreeOptions = (List<String>)((Map<String, Object>)jsonMap.get("entrees")).get("menu");
    model.addAttribute("entreeOptions", entreeOptions);

    List<String> dessertOptions = (List<String>)((Map<String, Object>)jsonMap.get("desserts")).get("menu");
    model.addAttribute("dessertOptions", dessertOptions);

    return "index";
  }
  public String getMenu(){
    return this.restTemplate.getForObject(this.menu, String.class);
  }

}
