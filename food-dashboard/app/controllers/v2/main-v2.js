import { https } from "../../../service/service.js";
import { layThongTinTuForm } from "../v1/controller-v1.js";
import { renderFoodList } from "./controller.js";
import {showDataForm} from '../v2/controller.js'

let fetchFoodList = () => {

    https
        .get("/food")
        .then((res)=>{
         renderFoodList(res.data);
        })
        .catch((err) =>{
            console.log(err);
        });
}
fetchFoodList() ;
    function deleteFood(id){
        console.log("🚴‍♀️ - deleteFood - id:", id);
        https
        .delete(`/food/${id}`)
        .then((res) =>{
            fetchFoodList() ;
        })
        .catch((err)=>{

        })
 }
 window.deleteFood = deleteFood ;


 window.addFood = () => {
    let food = layThongTinTuForm();
    https
    .post("/food",food)
    .then((res) => {
        $("#exampleModal").modal("hide");
        console.log("🚴‍♀️ - .then - res:", res);
        fetchFoodList();
    })
    .catch((err) => {
        console.log("🚴‍♀️ - err:", err);
        
    })
 };
 window.editFood = (id) => {
    $("#exampleModal").modal("show");
    https
    .get(`/food/${id}`)
    .then((res) => {
        showDataForm(res.data);
    })
    .catch((err) =>{

    })
 }
 window.updateFood = () => {
    let food = layThongTinTuForm();
    https
    .put(`/food/${food.ma}`,food)
    .then((res) => {
        $("#exampleModal").modal("hide");
        console.log("🚴‍♀️ - .then - res:", res);
        fetchFoodList();
    })
    .catch((err) => {
        console.log("🚴‍♀️ - err:", err);
        
    })
};