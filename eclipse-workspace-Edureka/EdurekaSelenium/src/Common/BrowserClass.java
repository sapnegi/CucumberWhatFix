package Common;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserClass {
	public static WebDriver driver;
	
	public static void OpenBrowser(String browserName) {
		try {
			if(browserName.equalsIgnoreCase("chrome")){
			System.setProperty("webdriver.chrome.driver", "E:\\Software\\Selenium\\Drivers\\chromedriver.exe");
			driver = new ChromeDriver();
			}
		}catch(WebDriverException e){
			System.out.println(e.getMessage());
		}
	}

}
