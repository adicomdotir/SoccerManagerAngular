import { NgModule } from "@angular/core";
import { GameService } from "./services/game.service";
import { StorageService } from "./services/storage.service";

@NgModule({
    imports: [],
    exports: [],
    providers: [GameService, StorageService]

})
export class CoreModule {

}