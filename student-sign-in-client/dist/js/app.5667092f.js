(function(){"use strict";var t={7891:function(t,e,n){var d=n(9963),r=n(6252);function s(t,e,n,d,s,u){const a=(0,r.up)("new-student-form"),l=(0,r.up)("student-table"),i=(0,r.up)("student-message");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(a,{onStudentAdded:u.newStudentAdded},null,8,["onStudentAdded"]),(0,r.Wm)(l,{students:s.students,onStudentArrivedOrLeft:u.studentArrivedOrLeft,onDeleteStudent:u.studentDeleted},null,8,["students","onStudentArrivedOrLeft","onDeleteStudent"]),(0,r.Wm)(i,{student:s.latestStudent},null,8,["student"])],64)}var u=n(3577);const a={key:0,class:"alert alert-danger"},l={class:"card add-student m-2 p-2"},i=(0,r._)("h4",{class:"card-title"},"Add new student",-1),o={class:"form-group"},c=(0,r._)("label",{for:"name"},"Name",-1),h={class:"form-group"},p=(0,r._)("label",{for:"starID"},"Star ID",-1);function f(t,e,n,s,f,m){return(0,r.wg)(),(0,r.iD)("div",null,[f.errors.length>0?((0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(f.errors,(t=>((0,r.wg)(),(0,r.iD)("li",null,(0,u.zw)(t),1)))),256))])])):(0,r.kq)("",!0),(0,r._)("div",l,[i,(0,r._)("div",o,[c,(0,r.wy)((0,r._)("input",{id:"name",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>f.newStudentName=t),onKeyup:e[1]||(e[1]=(0,d.D2)(((...t)=>m.addStudent&&m.addStudent(...t)),["enter"]))},null,544),[[d.nr,f.newStudentName,void 0,{trim:!0}]])]),(0,r._)("div",h,[p,(0,r.wy)((0,r._)("input",{id:"starID",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>f.newStarID=t),onKeyup:e[3]||(e[3]=(0,d.D2)(((...t)=>m.addStudent&&m.addStudent(...t)),["enter"]))},null,544),[[d.nr,f.newStarID,void 0,{trim:!0}]])]),(0,r._)("button",{class:"btn btn-primary",onClick:e[4]||(e[4]=(...t)=>m.addStudent&&m.addStudent(...t))},"Add")])])}n(7658);var m={name:"NewStudentForm",emits:["student-added"],data(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent(){if(this.errors=[],this.newStudentName||this.errors.push("Please enter a student name! (No student name present)"),this.newStarID||this.errors.push("Please enter a valid StarID! (No StarID present)"),0===this.errors.length){let t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t)}}}},v=n(3744);const A=(0,v.Z)(m,[["render",f]]);var S=A;const w={key:0},g={key:0,class:"alert alert-success"},b={key:1,class:"alert alert-warning"};function D(t,e,n,d,s,a){return n.student.name?((0,r.wg)(),(0,r.iD)("div",w,[n.student.present?((0,r.wg)(),(0,r.iD)("div",g," Welcome, "+(0,u.zw)(n.student.name),1)):((0,r.wg)(),(0,r.iD)("div",b," Goodbye, "+(0,u.zw)(n.student.name),1))])):(0,r.kq)("",!0)}var k={name:"StudentMessage",props:{student:Object}};const _=(0,v.Z)(k,[["render",D]]);var y=_;const O=t=>((0,r.dD)("data-v-4cf3896f"),t=t(),(0,r.Cn)(),t),I={class:"card student-list m-2 p-2"},N=O((()=>(0,r._)("h4",{class:"card-title"},"Student List",-1))),j={class:"edit-table-toggle form-check"},H=O((()=>(0,r._)("label",{for:"edit-table",class:"form-check-label"},"Edit Table?",-1))),L={id:"student-table"},Z={class:"table"},C=O((()=>(0,r._)("th",null,"Name",-1))),E=O((()=>(0,r._)("th",null,"StarID",-1))),F=O((()=>(0,r._)("th",null,"Present?",-1))),Q=O((()=>(0,r._)("div",{id:"attribute"},[(0,r._)("a",{target:"_blank",href:"https://icons8.com/icon/tLF4OA0qUTIn/delete"},"Delete"),(0,r.Uk)(" icon by "),(0,r._)("a",{target:"_blank",href:"https://icons8.com"},"Icons8")],-1)));function T(t,e,n,s,u,a){const l=(0,r.up)("student-row");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",I,[N,(0,r._)("div",j,[(0,r.wy)((0,r._)("input",{id:"edit-table",type:"checkbox",class:"form-check-input","onUpdate:modelValue":e[0]||(e[0]=t=>u.editTable=t)},null,512),[[d.e8,u.editTable]]),H]),(0,r._)("div",L,[(0,r._)("table",Z,[(0,r._)("tr",null,[C,E,F,(0,r.wy)((0,r._)("th",null,"Delete?",512),[[d.F8,u.editTable]])]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.students,(t=>((0,r.wg)(),(0,r.j4)(l,{student:t,edit:u.editTable,key:t.starID,onStudentArrivedOrLeft:a.arrivedOrLeft,onDeleteStudent:a.deleteStudent},null,8,["student","edit","onStudentArrivedOrLeft","onDeleteStudent"])))),128))])])]),Q],64)}var V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALpSURBVDhPXVNtSJNRFH7u3lfnvvwMtXTTtqWzSR9E1MBohghRhARJZFFCmoQShAVBGBFBUPZDk5J+JIH+6VdhRCZNEVpBhksHTvNjtMpMo/al1ba3c9/pkh4473vuueeec89z7mH4DwM2axH9zpLYSYq5jeAhGYCEe4wJnr3O91LcDCQCDNhK0wDpFhOEE4JWp0zJ3QB1oVHeW/roRWjSg9if3xFadtPppnKnO8D35AAOm1VHykNBo61KLd0KQ+0ZaC2loGB8m+JKCE1Nwnu/Hd+dQ3zdR9YjdqfbLzhsFsag6ARjR/XHamFuvgwlZWcKRfwwB3kkZ2ZhXXklBJUaP0femhCLpXf5vj1VQFLwOmsyd5dBf7IekVAQ/tERSLFY/DAhEvxny6s+jrTtO7m5zmHbXKxgjDUokpLFgvomMFHE8mcfRs+dhufKRV4zIgE/Zu/extj5Bp5Z9jE2NkNQa0QG1sjvWaHZVAyNiZMPqA2FyK48gMWhl5hpuwlfTxfmn/cia88+6CzWuM9GE1LW53HVLtLHpMovkOvkICJlHogEfHn8SOYi5+BhFNY1QkylRnGQr9poJmInTGuY+odoOAxRpyM/Jtctd2MtqYRVkvnXG5qekFvFIdfc2Yb5Z0+QW1WNnP2HMEc3mbnTmiBWikaJq09cneABXvBFeHaKGxCensTiYD8ydsW7Yr7QItc/39eLwJhL9gm4XQjPfOCqg9HT5W10ZZbZlSXXKAvdxO8ahsZcjKT0DO4kZ/S73kGlLyAeUuG5eomTvEyu2wR6DIun9NkGat8OhTIF/CWq8g0QUlTyYQ5eL2ediQJ83Q/k8ihoR/lrd7f8VmvzswclKVbyY/iNJTjuhs66BUmrjBNoj2ZhHFOt17Hg6EN0aamHzC2UPJgYppV5aCe1hlgXVQVGaM3xt8Hn4NfCV0SDwWXK3EmmGzQHc3wvEWAVFKiIjE2kVpAUkvD2eEn6STrAoh77q/GVcQb+AhRiGrW7XE9UAAAAAElFTkSuQmCC";const R=["checked"];function B(t,e,n,s,a,l){return(0,r.wg)(),(0,r.iD)("tr",{class:(0,u.C_)({present:n.student.present,absent:!n.student.present})},[(0,r._)("td",null,(0,u.zw)(n.student.name),1),(0,r._)("td",null,(0,u.zw)(n.student.starID),1),(0,r._)("td",null,[(0,r._)("input",{type:"checkbox",checked:n.student.present,onChange:e[0]||(e[0]=t=>l.arrivedOrLeft(n.student,t.target.checked))},null,40,R)]),(0,r.wy)((0,r._)("td",null,[(0,r._)("img",{onClick:e[1]||(e[1]=(...t)=>l.deleteStudent&&l.deleteStudent(...t)),src:V})],512),[[d.F8,n.edit]])],2)}var U={name:"StudentRow",emits:["student-arrived-or-left","delete-student"],props:{student:Object,edit:Boolean},methods:{arrivedOrLeft(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent(){confirm(`Do you want to delete ${this.student.name}?`)&&this.$emit("delete-student",this.student)}}};const W=(0,v.Z)(U,[["render",B],["__scopeId","data-v-7c6c7f94"]]);var Y=W,K={name:"StudentTable",emits:["student-arrived-or-left","delete-student"],components:{StudentRow:Y},props:{students:Array},data(){return{editTable:!1}},methods:{arrivedOrLeft(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent(t){this.$emit("delete-student",t)}}};const G=(0,v.Z)(K,[["render",T],["__scopeId","data-v-4cf3896f"]]);var J=G,x={name:"App",components:{NewStudentForm:S,StudentMessage:y,StudentTable:J},data(){return{students:[],latestStudent:{}}},mounted(){this.updateStudents()},methods:{updateStudents(){this.$student_api.getAllStudents().then((t=>{this.students=t})).catch((()=>{alert("Unable to fetch student list.")}))},newStudentAdded(t){this.$student_api.addStudent(t).then((t=>{this.updateStudents()})).catch((t=>{t.response.data.join(", ");alert("Error adding student. StarID must be unique.")}))},studentArrivedOrLeft(t,e){t.present=e,this.$student_api.updateStudent(t).then((()=>{this.latestStudent=t,this.updateStudents()})).catch((()=>{alert("Unable to update student.")}))},studentDeleted(t){this.$student_api.deleteStudent(t.id).then((()=>{this.updateStudents(),this.latestStudent={}})).catch((()=>{alert("Unable to delete student student.")}))}}};const z=(0,v.Z)(x,[["render",s]]);var M=z,X=n(6154);let q="/api/students";var $={getAllStudents(){return X.Z.get(q).then((t=>t.data))},addStudent(t){return X.Z.post(q,t).then((t=>t.data))},updateStudent(t){return X.Z.patch(`${q}/${t.id}`,t).then((t=>t.data))},deleteStudent(t){return X.Z["delete"](`${q}/${t}`).then((t=>t.data))}};let P=(0,d.ri)(M);P.config.globalProperties.$student_api=$,P.mount("#app")}},e={};function n(d){var r=e[d];if(void 0!==r)return r.exports;var s=e[d]={exports:{}};return t[d](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,d,r,s){if(!d){var u=1/0;for(o=0;o<t.length;o++){d=t[o][0],r=t[o][1],s=t[o][2];for(var a=!0,l=0;l<d.length;l++)(!1&s||u>=s)&&Object.keys(n.O).every((function(t){return n.O[t](d[l])}))?d.splice(l--,1):(a=!1,s<u&&(u=s));if(a){t.splice(o--,1);var i=r();void 0!==i&&(e=i)}}return e}s=s||0;for(var o=t.length;o>0&&t[o-1][2]>s;o--)t[o]=t[o-1];t[o]=[d,r,s]}}(),function(){n.d=function(t,e){for(var d in e)n.o(e,d)&&!n.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:e[d]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,d){var r,s,u=d[0],a=d[1],l=d[2],i=0;if(u.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var o=l(n)}for(e&&e(d);i<u.length;i++)s=u[i],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(o)},d=self["webpackChunkstudent_sign_in"]=self["webpackChunkstudent_sign_in"]||[];d.forEach(e.bind(null,0)),d.push=e.bind(null,d.push.bind(d))}();var d=n.O(void 0,[998],(function(){return n(7891)}));d=n.O(d)})();
//# sourceMappingURL=app.5667092f.js.map