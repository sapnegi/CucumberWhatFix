package StepDefinations;

import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import PageObjects.HomePageObjects;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import frameworkUtility.FunctionLibrary;

public class homePageStepDefination extends FunctionLibrary{
	
	
	HomePageObjects homePageObj = new HomePageObjects(); 
	
	@Given("^Application should be launched on browser$")
	public void application_should_be_launched_on_browser() throws Throwable {	   
		FunctionLibrary.openBrowser();
		FunctionLibrary.LaunchURL("https://whatfix.com/");
		FunctionLibrary.PageLoadTimeOut();
	}

	@Then("^Verify the tile of the webpage$")
	public void verify_the_tile_of_the_webpage() throws Throwable {
	   String title = driver.getTitle();
	   Assert.assertEquals("Whatfix | Accelerate Digital Adoption - Whatfix", title);	  
	}

	@Given("^User is on homepage$")
	public void user_is_on_homepage() throws Throwable {
		 String title = driver.getTitle();
		 Assert.assertEquals("Whatfix | Accelerate Digital Adoption - Whatfix", title);

	}

	@When("^User click on Customers link$")
	public void user_click_on_Customers_link() throws Throwable {
		homePageObj.CustomerMenuLink.click();
		FunctionLibrary.PageLoadTimeOut();
	   
	}

	@Then("^User is navigate to the Customers webpage$")
	public void user_is_navigate_to_the_Customers_webpage() throws Throwable {
		 String title = driver.getTitle();
		 Assert.assertEquals("Customers - Whatfix", title);	
	}
	
	@Given("^User is on Customers page$")
	public void user_is_on_Customers_page() throws Throwable {
		wait = new WebDriverWait(driver, 20);
		String headerlabel = wait.until(ExpectedConditions.visibilityOf(homePageObj.CustomersHeaderLabel)).getText();
		 Assert.assertEquals("Our Customers", headerlabel);
	}

	@When("^User click on Pricing link$")
	public void user_click_on_Pricing_link() throws Throwable {
		homePageObj.PricingMenuLink.click();
		FunctionLibrary.PageLoadTimeOut();
	}

	@Then("^User is navigate to the Pricing webpage$")
	public void user_is_navigate_to_the_Pricing_webpage() throws Throwable {
		 String title = driver.getTitle();
		 Assert.assertEquals("Pricing - Whatfix", title);	  
	}
	
	@Given("^User is on Pricing page$")
	public void user_is_on_Pricing_page() throws Throwable {
		wait = new WebDriverWait(driver, 20);
		String headerlabel = wait.until(ExpectedConditions.visibilityOf(homePageObj.PricingHeaderLabel)).getText();
		 Assert.assertEquals("Pricing", headerlabel);
	}

	@When("^User click on Partners link$")
	public void user_click_on_Partners_link() throws Throwable {
		homePageObj.PartnersMenuLink.click();
		FunctionLibrary.PageLoadTimeOut();	   
	}

	@Then("^User is navigate to the Partners webpage$")
	public void user_is_navigate_to_the_Partners_webpage() throws Throwable {
		 String title = driver.getTitle();
		 Assert.assertEquals("Partners - Whatfix", title);		
	}

	@Given("^User is on Partners page$")
	public void user_is_on_Partners_page() throws Throwable {
		wait = new WebDriverWait(driver, 20);
		String headerlabel = wait.until(ExpectedConditions.visibilityOf(homePageObj.PartnersHeaderLabel)).getText();
		 Assert.assertEquals("Partner with Whatfix", headerlabel);
	}
	@When("^User click on Resources link$")
	public void user_click_on_Resources_link() throws Throwable {
		homePageObj.ResourcesMenuLink.click();
		FunctionLibrary.PageLoadTimeOut();	 
	}

	@Then("^User is navigate to the Resources webpage$")
	public void user_is_navigate_to_the_Resources_webpage() throws Throwable {
		 String title = driver.getTitle();
		 Assert.assertEquals("Resources Archive - Whatfix", title);
		 driver.close();		
	}

}
