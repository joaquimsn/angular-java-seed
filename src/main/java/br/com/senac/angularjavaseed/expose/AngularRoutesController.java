package br.com.senac.angularjavaseed.expose;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Classe reponsável por gerenciar as rotas e recursos expostos para um SPA, Single Page Application utilizando o framework AngularJS.</br>
 * 
 * 
 * @author Joaquim Neto
 *
 * Created 27 de out de 2016 - 18:26:52
 */
@Controller
@RequestMapping("/")
public class AngularRoutesController {
	private final String EXTENSION = ".html";
	
	@RequestMapping
	public String index() {
		return "/index.html";
	}

	@RequestMapping(path = {"/**"})
	public String rotaPadrao() {
		return "/index.html";
	}

	@RequestMapping("/expose/{module}/{name}")
	public String componente(@PathVariable String module, @PathVariable String name) {
		return "/modules/" + module + "/views/" + EXTENSION;
	}	

	@RequestMapping("/partials/{module}/{name}")
	public String partials(@PathVariable String module, @PathVariable String name) {
		return "/modules/" + module + "/views/partials/" + name + EXTENSION;
	}

	@RequestMapping("/components/{componentName}")
	public String components(@PathVariable String componentName) {
		return "components/" + componentName;
	}
}
