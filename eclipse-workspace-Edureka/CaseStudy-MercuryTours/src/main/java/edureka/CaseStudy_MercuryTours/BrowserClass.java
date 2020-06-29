package edureka.CaseStudy_MercuryTours;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserClass 
{
	
	public static WebDriver driver; 
	
	public static void openBrowser(String BrowserName) {
		if(BrowserName.equalsIgnoreCase("Chrome")) {
			System.setProperty("webdriver.chrome.driver", "E:\\\\Software\\\\Selenium\\\\Drivers\\\\chromedriver.exe");
			driver = new ChromeDriver();
		}
	}
	
}
