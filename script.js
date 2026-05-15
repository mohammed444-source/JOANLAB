// مثال لتوليد قائمة المحاضرات
const lectures = [
  {title:"محاضرة علم الدم", file:"pdf/lecture1.pdf"},
  {title:"محاضرة الأحياء الدقيقة", file:"pdf/lecture2.pdf"},
  {title:"محاضرة الكيمياء الحيوية", file:"pdf/lecture3.pdf"}
];

const lectureList = document.getElementById("lecture-list");
lectures.forEach(l=>{
  let li=document.createElement("li");
  li.innerHTML=`<a href="${l.file}">${l.title}</a>`;
  lectureList.appendChild(li);
});

<script>

const sheetURL = "PUT_GOOGLE_SHEET_LINK_HERE";

fetch(sheetURL)
.then(res => res.text())
.then(data => {

let rows = data.split("\n");

let newsText = rows
.slice(1)
.map(r => r.replace(/,/g,""))
.join("  🔷  ");

document.getElementById("newsContent").innerText = newsText;

});

</script>

// معرض الصور
fetch("images.json")
.then(response => response.json())
.then(data => {

const gallery = document.getElementById("photo-gallery");

data.forEach(photo => {

let img = document.createElement("img");
img.src = photo;

gallery.appendChild(img);

});

});

// الأخبار
const news = [
  {title:"خبر 1", body:"محتوى الخبر الأول"},
  {title:"خبر 2", body:"محتوى الخبر الثاني"}
];
const newsList = document.getElementById("news-list");
news.forEach(n=>{
  let div=document.createElement("div");
  div.innerHTML=`<h4>${n.title}</h4><p>${n.body}</p>`;
  newsList.appendChild(div);
});