var movies;

var jQuery = './js/jquery-3.6.0.min.js';

import {  } from "module";
importScripts(jQuery)
$(function () {
  $.ajax({
    url: "https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies",
    type: "get",
    dataType: "json",
    data: {},
    success: function (data) {
      console.log((movies = data));
    },
  });
});