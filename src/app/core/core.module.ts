import { NgModule } from "@angular/core";
import { GameService } from "./services/game.service";
import { StorageService } from "./services/storage.service";
import { HeaderComponent } from "./layout/header/header.component";

@NgModule({
    imports: [],
    exports: [HeaderComponent],
    providers: [GameService, StorageService],
    declarations: [HeaderComponent]

})
export class CoreModule {

}