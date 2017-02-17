import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
   provideAppStore,
   provideSearchSource,
   provideSearchSourceService
} from '../../core/core.module';
import { MapService } from '../../core/map.service';
import { LayerService } from '../../map/shared/layer.service';
import { SearchService } from '../../core/search.service';

import { TestModule } from '../../test.module';
import { SharedModule } from '../../shared/shared.module';
import { MapModule } from '../../map/map.module';
import { SearchModule } from '../../search/search.module';
import { ToolModule } from '../../tool/tool.module';
import { ToolService } from '../../core/tool.service';
import { NavigatorComponent } from './navigator.component';

describe('NavigatorComponent', () => {
  let component: NavigatorComponent;
  let fixture: ComponentFixture<NavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestModule,
        MapModule,
        SearchModule,
        ToolModule,
        SharedModule
      ],
      declarations: [
        NavigatorComponent
      ],
      providers: [
        provideAppStore(),
        provideSearchSourceService(),
        provideSearchSource(),
        MapService,
        LayerService,
        SearchService,
        ToolService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});