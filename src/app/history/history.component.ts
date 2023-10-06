import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  isAuthenticated = false;

  constructor(
    public sidebarService: SidebarService,
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(['login']);
  }
  //  ACCORDION

  panels = [
    {
      title: 'Resep Ayam Goreng Indonesia',
      content: `
        <!-- Content for Ayam Goreng panel -->
        <p class="mt-4 text-gray-600" style="margin-top: 1rem;">
                    <strong>Judul:</strong> Ayam Goreng Lengkuas: Paduan Kelezatan yang Memukau<br>
                    <br>
                    <strong>Pengantar:</strong><br>
                    Siapa yang bisa menolak kelezatan ayam goreng yang renyah di luar, tetapi tetap lembut
                    dan juicy di dalamnya? Ditambah lagi, jika disertai dengan sentuhan eksotis rempah
                    lengkuas, hidangan ini akan menjadi sajian yang tak terlupakan. Dalam artikel ini, kita
                    akan mengungkap resep rahasia ayam goreng lengkuas yang membuat lidah bergoyang dan hati
                    senang. Siapkan diri Anda untuk menjelajahi dunia rasa yang menggoda!<br>
                    <br>
                    I. Bahan-bahan yang Diperlukan:<br>
                    Sebelum memasak, pastikan untuk menyiapkan bahan-bahan berikut:<br>
                    500 gram ayam, potong menjadi bagian yang lebih kecil<br>
                    3 batang serai, memarkan bagian putihnya<br>
                    4 lembar daun jeruk, sobek-sobek<br>
                    2 ruas lengkuas, memarkan dan iris tipis<br>
                    4 siung bawang putih, cincang halus<br>
                    2 sendok teh garam<br>
                    1 sendok teh gula<br>
                    1 sendok teh merica bubuk<br>
                    Minyak goreng secukupnya untuk menggoreng<br>
                    <br>
                    II. Langkah-langkah Memasak:<br>
                    Berikut adalah langkah-langkah untuk menciptakan ayam goreng lengkuas yang sempurna:<br>
                    Langkah 1: Marinasi<br>
                    Campurkan ayam potong dengan bawang putih cincang, serai, daun jeruk, lengkuas, garam,
                    gula, dan merica bubuk dalam sebuah wadah.<br>
                    Aduk rata dan biarkan marinate selama minimal 30 menit agar rempah meresap dengan
                    baik.<br>
                    Langkah 2: Penggorengan<br>
                    Panaskan minyak dalam wajan dengan api sedang-tinggi.<br>
                    Tambahkan ayam yang telah dimarinasi ke dalam wajan dengan hati-hati. Pastikan tidak
                    menumpuk ayam agar dapat matang dengan merata.<br>
                    Goreng ayam hingga berwarna kecokelatan dan renyah di luar serta matang sempurna di
                    dalam. Proses ini biasanya memakan waktu sekitar 10-15 menit.<br>
                    Angkat ayam dan tiriskan minyak berlebih dengan menggunakan kertas dapur.<br>
                    Langkah 3: Sajian<br>
                    Ayam goreng lengkuas siap disajikan! Hidangkan dengan nasi hangat, sambal favorit, dan
                    irisan mentimun segar untuk memberikan sentuhan kesegaran yang menyegarkan.<br>
                    <br>
                    III. Nikmati Kelezatan Ayam Goreng Lengkuas Anda!<br>
                    Ayam goreng lengkuas yang lezat ini dapat dinikmati sebagai hidangan utama dalam acara
                    keluarga, makan siang bersama teman-teman, atau bahkan sebagai hidangan spesial untuk
                    perayaan tertentu. Nikmati kelezatan ayam yang renyah dengan balutan aroma lengkuas yang
                    khas, dan rasakan sentuhan rempah yang memikat hati Anda.<br>
                    <br>
                    <strong>Penutup:</strong><br>
                    Dengan resep ayam goreng lengkuas ini, Anda dapat menciptakan hidangan yang tidak hanya
                    menggugah selera tetapi juga memberikan pengalaman kuliner yang tak terlupakan.
                    Kombinasi sempurna antara rasa ayam yang juicy dengan keharuman lengkuas yang eksotis
                    akan memanjakan lidah dan memuaskan hasrat kuliner Anda. Jadi, siapkan rempah-rempah
                    Anda dan mulailah petualangan memasak dengan ayam goreng lengkuas yang menggoda ini. 
                    Selamat mencoba dan selamat menikmati!<br>
                    <br>
                    <strong>Generated Pictures:</strong><br>
                </p>
      `,
      isDisplayed: true, // Initially, the panel is displayed
    },
    {
      title: 'Resep Ayam Goreng',
      content: `
        <!-- Content for Ayam Goreng panel -->
        <p class="mt-4 text-gray-600" style="margin-top: 1rem;">
                    <strong>Judul:</strong> Ayam Goreng Lengkuas: Paduan Kelezatan yang Memukau<br>
                    <br>
                    <strong>Pengantar:</strong><br>
                    Siapa yang bisa menolak kelezatan ayam goreng yang renyah di luar, tetapi tetap lembut
                    dan juicy di dalamnya? Ditambah lagi, jika disertai dengan sentuhan eksotis rempah
                    lengkuas, hidangan ini akan menjadi sajian yang tak terlupakan. Dalam artikel ini, kita
                    akan mengungkap resep rahasia ayam goreng lengkuas yang membuat lidah bergoyang dan hati
                    senang. Siapkan diri Anda untuk menjelajahi dunia rasa yang menggoda!<br>
                    <br>
                    I. Bahan-bahan yang Diperlukan:<br>
                    Sebelum memasak, pastikan untuk menyiapkan bahan-bahan berikut:<br>
                    500 gram ayam, potong menjadi bagian yang lebih kecil<br>
                    3 batang serai, memarkan bagian putihnya<br>
                    4 lembar daun jeruk, sobek-sobek<br>
                    2 ruas lengkuas, memarkan dan iris tipis<br>
                    4 siung bawang putih, cincang halus<br>
                    2 sendok teh garam<br>
                    1 sendok teh gula<br>
                    1 sendok teh merica bubuk<br>
                    Minyak goreng secukupnya untuk menggoreng<br>
                    <br>
                    II. Langkah-langkah Memasak:<br>
                    Berikut adalah langkah-langkah untuk menciptakan ayam goreng lengkuas yang sempurna:<br>
                    Langkah 1: Marinasi<br>
                    Campurkan ayam potong dengan bawang putih cincang, serai, daun jeruk, lengkuas, garam,
                    gula, dan merica bubuk dalam sebuah wadah.<br>
                    Aduk rata dan biarkan marinate selama minimal 30 menit agar rempah meresap dengan
                    baik.<br>
                    Langkah 2: Penggorengan<br>
                    Panaskan minyak dalam wajan dengan api sedang-tinggi.<br>
                    Tambahkan ayam yang telah dimarinasi ke dalam wajan dengan hati-hati. Pastikan tidak
                    menumpuk ayam agar dapat matang dengan merata.<br>
                    Goreng ayam hingga berwarna kecokelatan dan renyah di luar serta matang sempurna di
                    dalam. Proses ini biasanya memakan waktu sekitar 10-15 menit.<br>
                    Angkat ayam dan tiriskan minyak berlebih dengan menggunakan kertas dapur.<br>
                    Langkah 3: Sajian<br>
                    Ayam goreng lengkuas siap disajikan! Hidangkan dengan nasi hangat, sambal favorit, dan
                    irisan mentimun segar untuk memberikan sentuhan kesegaran yang menyegarkan.<br>
                    <br>
                    III. Nikmati Kelezatan Ayam Goreng Lengkuas Anda!<br>
                    Ayam goreng lengkuas yang lezat ini dapat dinikmati sebagai hidangan utama dalam acara
                    keluarga, makan siang bersama teman-teman, atau bahkan sebagai hidangan spesial untuk
                    perayaan tertentu. Nikmati kelezatan ayam yang renyah dengan balutan aroma lengkuas yang
                    khas, dan rasakan sentuhan rempah yang memikat hati Anda.<br>
                    <br>
                    <strong>Penutup:</strong><br>
                    Dengan resep ayam goreng lengkuas ini, Anda dapat menciptakan hidangan yang tidak hanya
                    menggugah selera tetapi juga memberikan pengalaman kuliner yang tak terlupakan.
                    Kombinasi sempurna antara rasa ayam yang juicy dengan keharuman lengkuas yang eksotis
                    akan memanjakan lidah dan memuaskan hasrat kuliner Anda. Jadi, siapkan rempah-rempah
                    Anda dan mulailah petualangan memasak dengan ayam goreng lengkuas yang menggoda ini. 
                    Selamat mencoba dan selamat menikmati!<br>
                    <br>
                    <strong>Generated Pictures:</strong><br>
                </p>
      `,
      isDisplayed: true, // Initially, the panel is displayed
    },
  ];

  panelOpenState: boolean = false;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  removePanel(index: number) {
    this.panels.splice(index, 1);
  }
  // ACCORDION

  status = false;
  tabs = [
    { title: 'Tab 1', userInput: '' },
    { title: 'Tab 2', userInput: '' },
  ];
  selected = new FormControl(0);
  selectAfterAdding = true;
  generateDisabled = [false, false];
  showCard = [false, false];
  modalOpen = false;
  showScrollButton = false;
  isProfileDropdownOpen = false;

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 350;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  generateClicked(index: number) {
    if (!this.isValidInput(index)) {
      alert('Please enter a valid input!');
      return;
    }

    this.generateDisabled[index] = true;
    this.showCard[index] = true;
    this.tabs[index].title = this.tabs[index].userInput;
    // console.log(`Generated content for Tab ${this.tabs}:`);
  }

  isValidInput(index: number): boolean {
    if (
      this.tabs[index].userInput === '' ||
      this.tabs[index].userInput.trim() === ''
    ) {
      return false;
    }

    return true;
  }

  resetInputs(index: number) {
    this.tabs[index].userInput = '';
    this.generateDisabled[index] = false;
    this.showCard[index] = false;
  }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push({ title: 'New', userInput: '' });
    this.generateDisabled.push(false);
    this.showCard.push(false);

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.generateDisabled.splice(index, 1);
    this.showCard.splice(index, 1);

    if (this.selected.value !== null && this.selected.value > index) {
      this.selected.setValue(this.selected.value - 1);
    }
  }
  addToggle() {
    this.status = !this.status;
  }
}
