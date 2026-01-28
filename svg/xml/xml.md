XML
===


CDATA
-----

Needed for inline script and style that contain forbidden chraracters:

```xml
<script>
	<![CDATA[

	// ]]>
</script>

<style>
	<![CDATA[

	]]>
</style>

```