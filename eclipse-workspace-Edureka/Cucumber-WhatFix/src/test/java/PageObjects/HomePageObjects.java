package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import frameworkUtility.FunctionLibrary;

public class HomePageObjects extends FunctionLibrary{
	
	public  HomePageObjects(){
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//span[text()='Customers']")
	public WebElement CustomerMenuLink;
	
	@FindBy(xpath="//span[text()='Pricing']")
	public WebElement PricingMenuLink;
	
	@FindBy(xpath="//span[text()='Partners']")
	public WebElement PartnersMenuLink;
	
	@FindBy(xpath="//span[text()='Resources']")
	public WebElement ResourcesMenuLink;
	
	@FindBy(xpath="//h1[text()='Our Customers']")
	public WebElement CustomersHeaderLabel;
	
	@FindBy(xpath="//h1[text()='Pricing']")
	public WebElement PricingHeaderLabel;
	
	@FindBy(xpath="//h1[contains(text(),'Partner')]")
	public WebElement PartnersHeaderLabel;
	
	@FindBy(xpath="//h1[contains(text(),'Resources')]")
	public WebElement ResourcesHeaderLabel;
	
}
