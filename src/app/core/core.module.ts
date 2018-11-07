import { NgModule } from "@angular/core";
import { GameService } from "./services/game.service";
import { StorageService } from "./services/storage.service";
import { HeaderComponent } from "./layout/header/header.component";
import { RouterModule } from "@angular/router";
import { GeneratorService } from "./services/generator.service";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [RouterModule, CommonModule],
    exports: [HeaderComponent],
    providers: [GameService, StorageService, GeneratorService],
    declarations: [HeaderComponent]

})
export class CoreModule {

}