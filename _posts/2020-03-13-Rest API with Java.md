---
layout: post
title: Rest API with Java
category: [Java]
description: 
keywords: ['Rest']
---
# Rest Web Services

* JAX-RS(Java API for RESTful Web Services) defined in JSR311. JAX-RS只是一套接口规范，位于`javax.ws.rs`. 包含了很多Java annotation的定义
* JAX-RS 具体实现由第三方提供，比如Sun的Jersy. 

## Idempotence
Reportable or not.
* GET clearly is.  
* DELETE is.
* PUT is.  PUT /messages/42 update message 42
* POST is NOT. 

## Response Header: Content Type

* Directives
    * dedia-type: the [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the resource or the data
    * charset
    * boundary

## HATEOAS(Hypermedia as the Engine of Application State)
* REST dont have service definitions/documentations
* All you need to nevigate a REST API are within the response itself