﻿<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ReactApplicationExample._Default" %>

<asp:Content ID="cntHeaderScript" runat="server" ContentPlaceHolderID="cphHeaderScript">
    <script src="Scripts/lib/React/react-with-addons-0.9.0.js"></script> 
 <script src="Scripts/example/component-state-change-by-event.js"></script>
</asp:Content>
<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">


    <div class="row">
        <div id="react-app"></div>
    </div>
    <script> 
        /* var rootElement = React.DOM.div({
            className: 'btn btn-primary'
        }, "Submit");
        React.renderComponent(rootElement, document.getElementById('react-app'));
     */
    React.renderComponent(rootElement() , document.getElementById('react-app'));

    </script>
</asp:Content>
