$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homePage.feature");
formatter.feature({
  "line": 1,
  "name": "Validation of menus on Whatfix homepage",
  "description": "",
  "id": "validation-of-menus-on-whatfix-homepage",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Webpage validation",
  "description": "",
  "id": "validation-of-menus-on-whatfix-homepage;webpage-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Application should be launched on browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Verify the tile of the webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "homePageStepDefination.application_should_be_launched_on_browser()"
});
formatter.result({
  "duration": 39464344400,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-K87M0HO\u0027, ip: \u0027192.168.0.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:202)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat frameworkUtility.FunctionLibrary.openBrowser(FunctionLibrary.java:22)\r\n\tat StepDefinations.homePageStepDefination.application_should_be_launched_on_browser(homePageStepDefination.java:19)\r\n\tat ✽.Given Application should be launched on browser(homePage.feature:4)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:37778/status] to be available after 20197 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:197)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat frameworkUtility.FunctionLibrary.openBrowser(FunctionLibrary.java:22)\r\n\tat StepDefinations.homePageStepDefination.application_should_be_launched_on_browser(homePageStepDefination.java:19)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(FutureTask.java:205)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:156)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 49 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "homePageStepDefination.verify_the_tile_of_the_webpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 7,
  "name": "Customers link validation",
  "description": "",
  "id": "validation-of-menus-on-whatfix-homepage;customers-link-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User click on Customers link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User is navigate to the Customers webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "homePageStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 6611400,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinations.homePageStepDefination.user_is_on_homepage(homePageStepDefination.java:32)\r\n\tat ✽.Given User is on homepage(homePage.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "homePageStepDefination.user_click_on_Customers_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "homePageStepDefination.user_is_navigate_to_the_Customers_webpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Pricing link validation",
  "description": "",
  "id": "validation-of-menus-on-whatfix-homepage;pricing-link-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User is on Customers page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User click on Pricing link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User is navigate to the Pricing webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "homePageStepDefination.user_is_on_Customers_page()"
});
formatter.result({
  "duration": 971814700,
  "error_message": "java.lang.NullPointerException\r\n\tat java.util.Objects.requireNonNull(Objects.java:203)\r\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:106)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:85)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:45)\r\n\tat StepDefinations.homePageStepDefination.user_is_on_Customers_page(homePageStepDefination.java:52)\r\n\tat ✽.Given User is on Customers page(homePage.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "homePageStepDefination.user_click_on_Pricing_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "homePageStepDefination.user_is_navigate_to_the_Pricing_webpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Partners link validation",
  "description": "",
  "id": "validation-of-menus-on-whatfix-homepage;partners-link-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User is on Pricing page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User click on Partners link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User is navigate to the Partners webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "homePageStepDefination.user_is_on_Pricing_page()"
});
formatter.result({
  "duration": 2157900,
  "error_message": "java.lang.NullPointerException\r\n\tat java.util.Objects.requireNonNull(Objects.java:203)\r\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:106)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:85)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:45)\r\n\tat StepDefinations.homePageStepDefination.user_is_on_Pricing_page(homePageStepDefination.java:71)\r\n\tat ✽.Given User is on Pricing page(homePage.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "homePageStepDefination.user_click_on_Partners_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "homePageStepDefination.user_is_navigate_to_the_Partners_webpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Resources link validation",
  "description": "",
  "id": "validation-of-menus-on-whatfix-homepage;resources-link-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User is on Partners page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User click on Resources link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User is navigate to the Resources webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "homePageStepDefination.user_is_on_Partners_page()"
});
formatter.result({
  "duration": 2489300,
  "error_message": "java.lang.NullPointerException\r\n\tat java.util.Objects.requireNonNull(Objects.java:203)\r\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:106)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:85)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:45)\r\n\tat StepDefinations.homePageStepDefination.user_is_on_Partners_page(homePageStepDefination.java:90)\r\n\tat ✽.Given User is on Partners page(homePage.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "homePageStepDefination.user_click_on_Resources_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "homePageStepDefination.user_is_navigate_to_the_Resources_webpage()"
});
formatter.result({
  "status": "skipped"
});
});