package frameworkUtility;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;


public class FunctionLibrary 
{	
	public static WebDriver driver;
	public static WebDriverWait wait;
	public static void openBrowser() throws IOException {
		
		FileUtils fs = new FileUtils();
		String browserName = fs.readProperty("browser");
		
		if(browserName.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver", "E:\\Software\\Selenium\\Drivers\\chromedriver.exe");
				driver = new ChromeDriver();}
		else if(browserName.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", "E:\\Software\\Selenium\\Drivers\\geckodriver.exe");
		driver = new FirefoxDriver();}
		
		
		driver.manage().window().maximize();		
	}
		
	public static void LaunchURL(String URL) {
		driver.get(URL);		
	}
	
	public static void PageLoadTimeOut() {
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
	}
}
