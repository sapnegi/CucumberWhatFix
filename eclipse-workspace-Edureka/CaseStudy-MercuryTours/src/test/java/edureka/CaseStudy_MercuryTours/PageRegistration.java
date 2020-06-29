package edureka.CaseStudy_MercuryTours;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import junit.framework.Assert;

public class PageRegistration extends BrowserClass{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		openBrowser("chrome");
		
		//open the demout application
		driver.get("http://newtours.demoaut.com/");
		
		//pageload timeout
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		
		//wait for the register link to appear
		WebDriverWait wait = new WebDriverWait(driver,10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("REGISTER"))).click();
		
		//enter the user details on register page
		driver.findElement(By.name("firstName")).sendKeys("user1");;
		driver.findElement(By.name("lastName")).sendKeys("Trainer");;
		driver.findElement(By.name("phone")).sendKeys("7745345674");
		driver.findElement(By.cssSelector(("#userName"))).sendKeys("user1.trainer@gmail.com");
		driver.findElement(By.name("address1")).sendKeys("addr1");;
		driver.findElement(By.name("address2")).sendKeys("addr2");
		driver.findElement(By.name("state")).sendKeys("Bengaluru");		
		driver.findElement(By.name("state")).sendKeys("karnataka");
		driver.findElement(By.name("postalCode")).sendKeys("560100");;
		driver.findElement(By.xpath("//select[@name='country']//option[@value='92']")).click();
		driver.findElement(By.id("email")).sendKeys("user1.trainer@gmail.com");
		driver.findElement(By.cssSelector("input[name^='pass']")).sendKeys("user1");
		driver.findElement(By.xpath("//input[@name='confirmPassword']")).sendKeys("user1");
		
		driver.findElement(By.name("register")).click();;
		
		//navigate Account success page
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.partialLinkText("Note: Your user name is")));
		
		//click on flights menu link
		WebElement flightLink = driver.findElement(By.linkText("Flights"));
		wait.until(ExpectedConditions.elementToBeClickable(flightLink)).click();
		
		//Enter the flight details
		driver.findElement(By.xpath("//input[@type='radio' and @value='roundtrip']")).click();
		driver.findElement(By.xpath("//select[@name='fromPort']//option[@value='London']")).click();
		driver.findElement(By.xpath("//select[@name='fromMonth']//option[contains(text(),'March')]")).click();
		driver.findElement(By.xpath("//select[@name='fromDay']//option[10]")).click();
		driver.findElement(By.xpath("//select[@name='toPort']//option[@value='Paris']")).click();
		driver.findElement(By.xpath("//select[@name='toMonth']//option[contains(text(),'March')]")).click();
		driver.findElement(By.xpath("//select[@name='toDay']//option[15]")).click();
		driver.findElement(By.xpath("//input[@value='Coach']//following::input[1]")).click();
		driver.findElement(By.xpath("//select[@name='airline']//option[text()='No Preference']")).click();
		driver.findElement(By.name("findFlights")).click();
		
		
		//On flight Reservation page
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//img[contains(@src,'selectflight')]"))));
		
		List<WebElement>  flightList = driver.findElements(By.cssSelector("input[type='radio']"));
		flightList.get(3).click();
		flightList.get(7).click();
		driver.findElement(By.cssSelector("input[name='reserveFlights']")).click();
		
		//Purchase page
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[name='buyFlights']")));
		driver.findElement(By.cssSelector("input[name='passFirst0']")).sendKeys("Fname1");
		driver.findElement(By.cssSelector("input[name='passLast0']")).sendKeys("Lname1");
		driver.findElement(By.cssSelector("input[name='creditnumber']")).sendKeys("1234234534566789");
		driver.findElement(By.cssSelector("input[name='buyFlights']")).click();
		
		//Booking confirmation page
		
		String bookingMsg = driver.findElement(By.xpath("//font[contains(text(),'itinerary has been booked!')]")).getText();
		Assert.assertEquals("Your itinerary has been booked!", bookingMsg);
				
		//close the browser
		driver.close();
	
	}

}
