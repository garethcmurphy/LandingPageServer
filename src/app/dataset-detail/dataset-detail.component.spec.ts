import { DatasetDetailComponent } from "./dataset-detail.component";
import { DatasetService } from "../dataset.service";
import { FileSizePipe } from "../filesize.pipe";
import { MatCardModule } from "@angular/material/card";
import { MockDatasetService, MockActivatedRoute, MockHttp, MockOAIervice } from "../MockStubs";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatListModule } from "@angular/material/list";
import { ActivatedRoute } from "@angular/router";
import { APP_CONFIG } from "../app-config.module";
import { HttpClient } from "@angular/common/http";
import { OAIService } from "../oai.service";

describe("DatasetDetailComponent", () => {
  let component: DatasetDetailComponent;
  let fixture: ComponentFixture<DatasetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatListModule],
      declarations: [DatasetDetailComponent, FileSizePipe],
      providers: [
        { provide: OAIService, useClass: MockOAIervice },
        { provide: HttpClient, useClass: MockHttp },
        { provide: DatasetService, useClass: MockDatasetService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        {
          provide: APP_CONFIG,
          useValue: {
            production: false
          }
        }
      ]
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
