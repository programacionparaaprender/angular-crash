import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsPostComponent } from './lists-post.component';

describe('ListsPostComponent', () => {
  let component: ListsPostComponent;
  let fixture: ComponentFixture<ListsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
