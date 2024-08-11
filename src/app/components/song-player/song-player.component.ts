import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-song-player',
  templateUrl: './song-player.component.html',
  styleUrls: ['./song-player.component.css']
})
export class SongPlayerComponent implements OnInit {
  songId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.songId = params.get('id')!;
      // Load song data using songId
    });
  }
}
