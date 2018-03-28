import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AdminComponent } from "./admin.component";
import { OverviewComponent } from "./overview.component";
import { ProductAdminComponent } from "./productAdmin.component";
import { OrderAdminComponent } from "./orderAdmin.component";
import { ProductEditorComponent } from "./productEditor.component";

@NgModule({
  declarations: [AdminComponent, OverviewComponent,
    ProductAdminComponent, OrderAdminComponent, ProductEditorComponent],
  imports: [BrowserModule, RouterModule, FormsModule]
})
export class AdminModule { }
