/**
 * Created by asyas on 11/21/2015.
 */

function checkuser(){
    Parse.initialize("Habv3TSZKdzA1El2dEHDW6S0GyEu53XlUJvkTmXs", "gNoPNb3GFCYdrRCfIwpRJ72s0yeq1mcUevI7DvJM");

    var currentUser = Parse.User.current();
    if (currentUser) {
        $("#loginbtn").css('display','none');
        $("#logoutbtn").css('display','');
    }
}

function login(){
    Parse.initialize("Habv3TSZKdzA1El2dEHDW6S0GyEu53XlUJvkTmXs", "gNoPNb3GFCYdrRCfIwpRJ72s0yeq1mcUevI7DvJM");
//    login and signup
    Parse.FacebookUtils.logIn(null, {
        success: function(user) {

                location.reload();

        },
        error: function(user, error) {
            location.reload();
        }
    });
}

//logout
function logout(){
    Parse.initialize("Habv3TSZKdzA1El2dEHDW6S0GyEu53XlUJvkTmXs", "gNoPNb3GFCYdrRCfIwpRJ72s0yeq1mcUevI7DvJM");
    Parse.User.logOut();
    //var currentUser = Parse.User.current();
    location.reload();
    location.reload();
}