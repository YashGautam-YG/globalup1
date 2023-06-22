function gettingvalues()
         {            
            var connection = new ActiveXObject("ADODB.Connection");
            var connectionstring = "Data Source="";Initial Catalog="";User ID="";Password="";Provider=""";
            connection.Open(connectionstring);
            var rs = new ActiveXObject("ADODB.Recordset");
            rs.Open("select * from logindetails where username='" **+ username +** "' and password= '" **+ password +** "'", connection);
            if (!rs.eof) {
               window.location="kwitter_page.js";
            else {
                document.getElementById("Hi").innerHTML="Room doesn't exist"
            }
            connection.close;
        }