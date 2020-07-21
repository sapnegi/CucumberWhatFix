package frameworkUtility;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class FileUtils {

	Properties property = new Properties();
	public static String Filepath = System.getProperty("user.dir")+"//src//main//resources//config.properties";
	FileInputStream reader=null;
	
	//constructor to call the load properties call
	public FileUtils(){
		loadProperties();
	}
	
	// to load the properties file
	public void loadProperties(){		
	try {
			reader = new FileInputStream(Filepath);
			property.load(reader);
		} catch (IOException e) {
			e.printStackTrace();
		}	
	}
	
	// to get the value of the key mentioned in properties file
	public String readProperty(String key) {		
		return property.getProperty(key);		
	}
}
