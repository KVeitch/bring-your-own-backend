# bring-your-own-backend


Endpoints available (e.g. GET /api/v1/students, POST api/v1/students)  



What parameters can be used in certain requests (e.g. For a POST request, what should be put in the request body?)   


Sample responses from endpoints (What does the response object look like for a request?)  


<details><summary> 'teams' table information
</summary>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>id</code></td>
<td><code>increments</code></td>
<td>Can be one of <code>all</code>, <code>public</code>, or <code>private</code>. Default: <code>all</code>
</td>
</tr>
<tr>
<td><code>teamnname</code></td>
<td><code>string</code></td>
<td>Comma-separated list of values. Can include:<br>* <code>owner</code>: Repositories that are owned by the authenticated user.<br>* <code>collaborator</code>: Repositories that the user has been added to as a collaborator.<br>* <code>organization_member</code>: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.<br><br>Default: <code>owner,collaborator,organization_member</code>
</td>
</tr>
<tr>
<td><code>stadium</code></td>
<td><code>string</code></td>
<td>Can be one of <code>all</code>, <code>owner</code>, <code>public</code>, <code>private</code>, <code>member</code>. Default: <code>all</code><br><br>Will cause a <code>422</code> error if used in the same request as <strong>visibility</strong> or <strong>affiliation</strong>.</td>
</tr>
<tr>
<td><code>logoUrl</code></td>
<td><code>string</code></td>
<td>Can be one of <code>created</code>, <code>updated</code>, <code>pushed</code>, <code>full_name</code>. Default: <code>full_name</code>
</td>
</tr>
<tr>
<td><code>city</code></td>
<td><code>string</code></td>
<td>Can be one of <code>asc</code> or <code>desc</code>. Default: <code>asc</code> when using <code>full_name</code>, otherwise <code>desc</code>
</td>
</tr>
</tbody>
</table>
</details>

---

<details>
  <summary> <code>GET /api/v1/:id </code>
</summary>
<h3>Parameters</h3>

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>type</code></td>
<td><code>string</code></td>
<td>Can be one of <code>all</code>, <code>owner</code>, <code>member</code>. Default: <code>owner</code>
</td>
</tr>
<tr>
<td><code>sort</code></td>
<td><code>string</code></td>
<td>Can be one of <code>created</code>, <code>updated</code>, <code>pushed</code>, <code>full_name</code>. Default: <code>full_name</code>
</td>
</tr>
<tr>
<td><code>direction</code></td>
<td><code>string</code></td>
<td>Can be one of <code>asc</code> or <code>desc</code>. Default: <code>asc</code> when using <code>full_name</code>, otherwise <code>desc</code>
</td>
</tr>
</tbody>
</table>

</details>

---