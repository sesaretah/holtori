var app = require('express')();
var https = require('https');
var fs = require('fs');
var server = https.createServer({
  key: fs.readFileSync('/home/projects/ssl/webinar.ut.ac.ir.nopass.key'),
  cert: fs.readFileSync('/home/projects/ssl/webinar.ut.ac.irSSLCertificate.crt')
}, app).listen(4200, () => {
  console.log('Listening...')
})

var io = require('socket.io')(server);
var bodyParser = require('body-parser')
var nodeMailer = require('nodemailer');

var template = "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html xmlns:v='urn:schemas-microsoft-com:vml'><head> <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'/> <meta name='viewport' content='width=device-width; initial-scale=1.0; maximum-scale=1.0;'/> <meta name='viewport' content='width=600,initial-scale=2.3,user-scalable=no'> <link href='https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700' rel='stylesheet'> <link href='https://fonts.googleapis.com/css?family=Quicksand:300,400,700' rel='stylesheet'> <link href='http://cdn.font-store.ir/shahab.css' rel='stylesheet'> <title></title> <style type='text/css'> body{width: 100%; background-color: #ffffff; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; mso-margin-top-alt: 0px; mso-margin-bottom-alt: 0px; mso-padding-alt: 0px 0px 0px 0px;}p, h1, h2, h3, h4{margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0;}span.preheader{display: none; font-size: 1px;}html{width: 100%;}table{font-size: 14px; border: 0;}/* ----------- responsivity ----------- */ @media only screen and (max-width: 640px){/*------ top header ------ */ .main-header{font-size: 20px !important;}.main-section-header{font-size: 28px !important;}.show{display: block !important;}.hide{display: none !important;}.align-center{text-align: center !important;}.no-bg{background: none !important;}/*----- main image -------*/ .main-image img{width: 440px !important; height: auto !important;}/*======divider======*/ .divider img{width: 440px !important;}/*-------- container --------*/ .container590{width: 440px !important;}.container580{width: 400px !important;}.main-button{width: 220px !important;}/*-------- secions ----------*/ .section-img img{width: 320px !important; height: auto !important;}.team-img img{width: 100% !important; height: auto !important;}}@media only screen and (max-width: 479px){/*------ top header ------ */ .main-header{font-size: 18px !important;}.main-section-header{font-size: 26px !important;}/*======divider======*/ .divider img{width: 280px !important;}/*-------- container --------*/ .container590{width: 280px !important;}.container590{width: 280px !important;}.container580{width: 260px !important;}/*-------- secions ----------*/ .section-img img{width: 280px !important; height: auto !important;}}</style> </head><body class='respond' leftmargin='0' topmargin='0' marginwidth='0' marginheight='0'> <table style='display:none!important;'> <tr> <td> <div style='overflow:hidden;display:none;font-size:1px;color:#ffffff;line-height:1px;font-family:shahab;maxheight:0px;max-width:0px;opacity:0;'></div></td></tr></table> <table border='0' width='100%' cellpadding='0' cellspacing='0' bgcolor='ffffff'> <tr> <td align='center'> <table border='0' align='center' width='590' cellpadding='0' cellspacing='0' class='container590'> <tr> <td height='25' style='font-size: 25px; line-height: 25px;'>&nbsp;</td></tr><tr> <td align='center'> <table border='0' align='center' width='590' cellpadding='0' cellspacing='0' class='container590'> <tr> <td align='center' height='70' style='height:70px;'> <a href='' style='display: block; border-style: none !important; border: 0 !important;'><img width='90' border='0' style='display: block; width: 90px;' src='https://sn.ut.ac.ir/assets/logo-95e870159860fb77d68cc3a1f13d5579436f829bf894c69fb2416814514362d0.png' alt=''/></a> </td></tr></table> </td></tr><tr> <td height='25' style='font-size: 25px; line-height: 25px;'>&nbsp;</td></tr></table> </td></tr></table> <table border='0' width='100%' cellpadding='0' cellspacing='0' bgcolor='ffffff' class='bg_color'> <tr> <td align='center'> <table border='0' align='center' width='590' cellpadding='0' cellspacing='0' class='container590'> <tr> <td align='center' style='color: #343434; font-size: 18px; font-family: Quicksand, Calibri, sans-serif; font-weight:700;letter-spacing: 3px; line-height: 35px;' class='main-header'> <div style='line-height: 35px'>شبکه اجتماعی آموزش عالی</span> </div></td></tr><tr> <td height='10' style='font-size: 10px; line-height: 10px;'>&nbsp;</td></tr><tr> <td align='center'> <table border='0' width='40' align='center' cellpadding='0' cellspacing='0' bgcolor='eeeeee'> <tr> <td height='2' style='font-size: 2px; line-height: 2px;'>&nbsp;</td></tr></table> </td></tr><tr> <td height='20' style='font-size: 20px; line-height: 20px;'>&nbsp;</td></tr><tr> <td align='right'> <table border='0' width='590' align='center' cellpadding='0' cellspacing='0' class='container590'> <tr> <td align='right' style='color: #888888; font-size: 16px; font-family:shahab; line-height: 24px;'> <p style='line-height: 24px; margin-bottom:15px;'> باسلام؛ </p><p style='line-height: 24px;margin-bottom:15px;direction: rtl;'>+text+ </p><p style='line-height: 24px; margin-bottom:20px;'> </p><table border='0' align='center' width='180' cellpadding='0' cellspacing='0' bgcolor='3b6731' style='margin-bottom:20px;'> <tr> <td height='10' style='font-size: 10px; line-height: 10px;'>&nbsp;</td></tr><tr> <td align='center' style='color: #ffffff; font-size: 14px; font-family: ' Work Sans ', Calibri, sans-serif; line-height: 22px; letter-spacing: 2px;'> <div style='line-height: 22px;'> <a href='+url+' style='color: #ffff88; text-decoration: none;'>کلیک کنید</a> </div></td></tr><tr> <td height='10' style='font-size: 10px; line-height: 10px;'>&nbsp;</td></tr></table> <p style='line-height: 24px'> ،با تشکر</br> تیم شعاع </p></td></tr></table> </td></tr></table> </td></tr><tr> <td height='40' style='font-size: 40px; line-height: 40px;'>&nbsp;</td></tr></table> <table border='0' width='100%' cellpadding='0' cellspacing='0' bgcolor='ffffff' class='bg_color'> <tr> <td height='60' style='font-size: 60px; line-height: 60px;'>&nbsp;</td></tr><tr> <td align='center'> <table border='0' align='center' width='590' cellpadding='0' cellspacing='0' class='container590 bg_color'> <tr> <td align='center'> <table border='0' align='center' width='590' cellpadding='0' cellspacing='0' class='container590 bg_color'> <tr> <td> <table border='0' width='300' align='left' cellpadding='0' cellspacing='0' style='border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;' class='container590'> <tr> <td align='left'> <a href='' style='display: block; border-style: none !important; border: 0 !important;'><img width='40' border='0' style='display: block; width: 40px;' src='https://sn.ut.ac.ir/assets/logo-95e870159860fb77d68cc3a1f13d5579436f829bf894c69fb2416814514362d0.png' alt=''/></a> </td></tr><tr> <td height='25' style='font-size: 25px; line-height: 25px;'>&nbsp;</td></tr><tr> <td align='left' style='color: #888888; font-size: 14px; font-family: ' Work Sans ', Calibri, sans-serif; line-height: 23px;' class='text_color'> <div style='color: #333333; font-size: 14px; font-family: ' Work Sans ', Calibri, sans-serif; font-weight: 600; mso-line-height-rule: exactly; line-height: 23px;'> Email us: <br/> <a href='mailto:' style='color: #888888; font-size: 14px; font-family: ' Hind Siliguri ', Calibri, Sans-serif; font-weight: 400;'>snadmin@ut.ac.ir</a> </div></td></tr></table> <table border='0' width='2' align='left' cellpadding='0' cellspacing='0' style='border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;' class='container590'> <tr> <td width='2' height='10' style='font-size: 10px; line-height: 10px;'></td></tr></table> <table border='0' width='200' align='right' cellpadding='0' cellspacing='0' style='border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;' class='container590'> <tr> <td class='hide' height='45' style='font-size: 45px; line-height: 45px;'>&nbsp;</td></tr><tr> <td height='15' style='font-size: 15px; line-height: 15px;'>&nbsp;</td></tr><tr> <td> <table border='0' align='right' cellpadding='0' cellspacing='0'> <tr> <td> <a href='https://www.facebook.com/shoaapp' style='display: block; border-style: none !important; border: 0 !important;'><img width='24' border='0' style='display: block;' src='http://i.imgur.com/Qc3zTxn.png' alt=''></a> </td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td> <a href='https://twitter.com/shoaapp' style='display: block; border-style: none !important; border: 0 !important;'><img width='24' border='0' style='display: block;' src='http://i.imgur.com/RBRORq1.png' alt=''></a> </td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </td></tr><tr> <td height='60' style='font-size: 60px; line-height: 60px;'>&nbsp;</td></tr></table></body></html>"
app.use( bodyParser.json() );       // to support JSON-encoded bodies

//server.listen(4200);




app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var clients = []
  for(var socket in io.sockets.sockets)
  {
    clients.push(socket)
    if (clients.length == Object.keys(io.sockets.sockets).length){
      res.end(JSON.stringify({ 'clients':  clients}));
    }
  }
  if (Object.keys(io.sockets.sockets).length == 0){
    res.end(JSON.stringify({ 'clients':  []}));
  }
});

app.post('/mail', function (req, res) {
  console.log(req.body);
  let transporter = nodeMailer.createTransport({
    host: 'mail.ut.ac.ir',
    port: 587,
    secure: false,
    auth: {
      user: 'snadmin',
      pass: '30Tue2017'
    }
  });
  let mailOptions = {
    from: '"Shoa" <snadmin@ut.ac.ir>', // sender address
    to: req.body.to,//req.body.to, // list of receivers
    subject:  req.body.subject,//req.body.subject, // Subject line
    //text: 'test',//req.body.body, // plain text body
    html: template.replace("+text+", req.body.text).replace("+url+", req.body.url) // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ 'result': 'Request Processed' }));
});


app.post('/send', function (req, res) {
  console.log(req.body);
  io.to(req.body.id).emit('message', { title: req.body.title, body: req.body.body});
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ 'result': 'Request Processed' }));
});

io.on('connection', function (socket) {
  console.log(socket.id);
  //socket.emit('message', { title: 'hello', body: 'welcome' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
