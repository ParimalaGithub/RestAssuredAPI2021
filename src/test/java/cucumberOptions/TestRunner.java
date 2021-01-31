package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

//feature file
//step defination file
@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/features",glue={"step.Definations"},
dryRun = false,
monochrome = true,//display the console output in a proper readable format
strict=true,//it will check any step is not defined in step definition file
format = {"pretty", "html:test-out"})//check mapping between feature and def file


public class TestRunner {
	

}
