package module3;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Common.BrowserClass;

public class BasicSeleniumCommands extends BrowserClass{

	public static void main(String[] args) 
	{
		//instantiate chrome driver
		OpenBrowser("chrome");
		
		//get commands
		driver.get("https://www.facebook.com/");
		driver.getTitle();
		driver.getCurrentUrl();
		
		//navigation
		// driver.navigate().forward(); 
		//driver.navigate().back();
		driver.navigate().refresh();
		
		// find elements
		driver.findElement(By.id("email")).sendKeys("sapna");
		
		
		//close and quit
 
		driver.quit();
	}

}
