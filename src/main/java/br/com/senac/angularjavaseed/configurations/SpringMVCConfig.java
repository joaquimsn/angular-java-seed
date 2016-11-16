package br.com.senac.angularjavaseed.configurations;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "br.senac.angularjavaseed")
public class SpringMVCConfig extends WebMvcConfigurerAdapter{

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/static/**").addResourceLocations("/build/");
		registry.addResourceHandler("/languages/**").addResourceLocations("/build/resources/languages");
		registry.addResourceHandler("/**").addResourceLocations("/WEB-INF/views/");
	}
	
}
