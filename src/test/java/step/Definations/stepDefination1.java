package step.Definations;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class stepDefination1 {

    @Given("^user is on landing page$")
    public void user_is_on_landing_page() throws Throwable {
        //throw new PendingException();
    }

    @When("^user login into application with username=\"([^\"]*)\" and password=\"([^\"]*)\"\"([^\"]*)\"$")
    public void user_login_into_application_with_usernamesomething_and_passwordsomethingsomething(String strArg1, String strArg2) throws Throwable {
    	System.out.println(strArg1);System.out.println(strArg2);
        //throw new PendingException();
    }
    @When("^user login into application with username=\"([^\"]*)\" and password=\"([^\"]*)\"$")
    public void user_login_into_application_with_username_and_password(String arg1, String arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       // throw new PendingException();
    }

    @Then("^home page is populated$")
    public void home_page_is_populated() throws Throwable {
       //throw new PendingException();
    }

    @Then("^Cards displayed are \"([^\"]*)\"$")
    public void cards_displayed_are(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	System.out.println("Cards displayed are "+arg1);
        
    }

}