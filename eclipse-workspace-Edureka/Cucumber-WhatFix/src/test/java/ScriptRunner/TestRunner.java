package ScriptRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Sapna Sharma\\eclipse-workspace-Edureka\\Cucumber-WhatFix\\src\\test\\resources\\Features",
					glue= {"StepDefinations"},
					plugin= {"pretty","html:target/Cucumber","json:target/Cucumber.json"}		
		)


public class TestRunner {
	
}
