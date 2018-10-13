<% include partials/header %>

<div class="row">
<form action="/books" method="POST">
	<div class="form-group"><input class="form-control" type="text" name="username" placeholder="Username"></div>
	<div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password"></div>
	<button class="btn btn-lg btn-primary btn-block">ADD</button>
</form>
<a href="/home">Back</a>
</div>

<% include partials/footer %>