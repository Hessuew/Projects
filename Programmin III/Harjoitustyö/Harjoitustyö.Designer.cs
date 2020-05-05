<<<<<<< HEAD
﻿namespace WindowsFormsApp5
{
    partial class Harjoitustyö
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.Errorkuvake = new System.Windows.Forms.ErrorProvider(this.components);
            this.Etunimi = new System.Windows.Forms.Label();
            this.tbEtunimi = new System.Windows.Forms.TextBox();
            this.Datanäyttö = new System.Windows.Forms.DataGridView();
            this.Sukunimi = new System.Windows.Forms.Label();
            this.tbSukunimi = new System.Windows.Forms.TextBox();
            this.Ikä = new System.Windows.Forms.Label();
            this.tbIkä = new System.Windows.Forms.TextBox();
            this.btnLisää = new System.Windows.Forms.Button();
            this.Syntymäaika = new System.Windows.Forms.Label();
            this.Sukupuoli = new System.Windows.Forms.Label();
            this.Syntymäpaikka = new System.Windows.Forms.Label();
            this.tbSpaikka = new System.Windows.Forms.TextBox();
            this.cbSukupuoli = new System.Windows.Forms.ComboBox();
            this.tbSaika = new System.Windows.Forms.DateTimePicker();
            this.panel2 = new System.Windows.Forms.Panel();
            this.Pakollinen1 = new System.Windows.Forms.Label();
            this.Pakollinen3 = new System.Windows.Forms.Label();
            this.Pakollinen2 = new System.Windows.Forms.Label();
            this.panel1 = new System.Windows.Forms.Panel();
            this.Status = new System.Windows.Forms.StatusStrip();
            this.toolStripStatusLabel1 = new System.Windows.Forms.ToolStripStatusLabel();
            this.Ohjeteksti = new System.Windows.Forms.Label();
            this.Tyhjä = new System.Windows.Forms.Label();
            this.Menubaar = new System.Windows.Forms.MenuStrip();
            this.FileToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.openToolStripMenuItem1 = new System.Windows.Forms.ToolStripMenuItem();
            this.saveToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.sortByToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.alphabeticalToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.dateOfBirthToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.exitToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.helpToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            ((System.ComponentModel.ISupportInitialize)(this.Errorkuvake)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.Datanäyttö)).BeginInit();
            this.panel2.SuspendLayout();
            this.panel1.SuspendLayout();
            this.Status.SuspendLayout();
            this.Menubaar.SuspendLayout();
            this.SuspendLayout();
            // 
            // Errorkuvake
            // 
            this.Errorkuvake.ContainerControl = this;
            // 
            // Etunimi
            // 
            this.Etunimi.AutoSize = true;
            this.Etunimi.Location = new System.Drawing.Point(15, 46);
            this.Etunimi.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.Etunimi.Name = "Etunimi";
            this.Etunimi.Size = new System.Drawing.Size(41, 13);
            this.Etunimi.TabIndex = 12;
            this.Etunimi.Text = "Etunimi";
            // 
            // tbEtunimi
            // 
            this.tbEtunimi.Location = new System.Drawing.Point(95, 44);
            this.tbEtunimi.Margin = new System.Windows.Forms.Padding(2);
            this.tbEtunimi.Name = "tbEtunimi";
            this.tbEtunimi.Size = new System.Drawing.Size(106, 20);
            this.tbEtunimi.TabIndex = 1;
            this.tbEtunimi.Validating += new System.ComponentModel.CancelEventHandler(this.tbEtunimi_Validating);
            this.tbEtunimi.Validated += new System.EventHandler(this.tbEtunimi_Validated);
            // 
            // Datanäyttö
            // 
            this.Datanäyttö.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.Datanäyttö.Location = new System.Drawing.Point(6, 214);
            this.Datanäyttö.Margin = new System.Windows.Forms.Padding(2);
            this.Datanäyttö.Name = "Datanäyttö";
            this.Datanäyttö.RowTemplate.Height = 24;
            this.Datanäyttö.Size = new System.Drawing.Size(644, 317);
            this.Datanäyttö.TabIndex = 10;
            this.Datanäyttö.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView1_CellClick);
            // 
            // Sukunimi
            // 
            this.Sukunimi.AutoSize = true;
            this.Sukunimi.Location = new System.Drawing.Point(15, 69);
            this.Sukunimi.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.Sukunimi.Name = "Sukunimi";
            this.Sukunimi.Size = new System.Drawing.Size(50, 13);
            this.Sukunimi.TabIndex = 20;
            this.Sukunimi.Text = "Sukunimi";
            // 
            // tbSukunimi
            // 
            this.tbSukunimi.Location = new System.Drawing.Point(95, 66);
            this.tbSukunimi.Margin = new System.Windows.Forms.Padding(2);
            this.tbSukunimi.Name = "tbSukunimi";
            this.tbSukunimi.Size = new System.Drawing.Size(106, 20);
            this.tbSukunimi.TabIndex = 2;
            this.tbSukunimi.Validating += new System.ComponentModel.CancelEventHandler(this.tbSukunimi_Validating);
            this.tbSukunimi.Validated += new System.EventHandler(this.tbSukunimi_Validated);
            // 
            // Ikä
            // 
            this.Ikä.AutoSize = true;
            this.Ikä.Location = new System.Drawing.Point(15, 112);
            this.Ikä.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.Ikä.Name = "Ikä";
            this.Ikä.Size = new System.Drawing.Size(22, 13);
            this.Ikä.TabIndex = 21;
            this.Ikä.Text = "Ikä";
            // 
            // tbIkä
            // 
            this.tbIkä.Location = new System.Drawing.Point(95, 112);
            this.tbIkä.Margin = new System.Windows.Forms.Padding(2);
            this.tbIkä.Name = "tbIkä";
            this.tbIkä.Size = new System.Drawing.Size(106, 20);
            this.tbIkä.TabIndex = 4;
            this.tbIkä.Validating += new System.ComponentModel.CancelEventHandler(this.tbIkä_Validating);
            this.tbIkä.Validated += new System.EventHandler(this.tbIkä_Validated);
            // 
            // btnLisää
            // 
            this.btnLisää.Location = new System.Drawing.Point(251, 44);
            this.btnLisää.Margin = new System.Windows.Forms.Padding(2);
            this.btnLisää.Name = "btnLisää";
            this.btnLisää.Size = new System.Drawing.Size(93, 42);
            this.btnLisää.TabIndex = 7;
            this.btnLisää.Text = "Lisää";
            this.btnLisää.UseVisualStyleBackColor = true;
            this.btnLisää.Click += new System.EventHandler(this.btnLisää_Click);
            // 
            // Syntymäaika
            // 
            this.Syntymäaika.AutoSize = true;
            this.Syntymäaika.Location = new System.Drawing.Point(15, 134);
            this.Syntymäaika.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.Syntymäaika.Name = "Syntymäaika";
            this.Syntymäaika.Size = new System.Drawing.Size(67, 13);
            this.Syntymäaika.TabIndex = 23;
            this.Syntymäaika.Text = "Syntymäaika";
            // 
            // Sukupuoli
            // 
            this.Sukupuoli.AutoSize = true;
            this.Sukupuoli.Location = new System.Drawing.Point(15, 89);
            this.Sukupuoli.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.Sukupuoli.Name = "Sukupuoli";
            this.Sukupuoli.Size = new System.Drawing.Size(54, 13);
            this.Sukupuoli.TabIndex = 24;
            this.Sukupuoli.Text = "Sukupuoli";
            // 
            // Syntymäpaikka
            // 
            this.Syntymäpaikka.AutoSize = true;
            this.Syntymäpaikka.Location = new System.Drawing.Point(15, 156);
            this.Syntymäpaikka.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.Syntymäpaikka.Name = "Syntymäpaikka";
            this.Syntymäpaikka.Size = new System.Drawing.Size(79, 13);
            this.Syntymäpaikka.TabIndex = 25;
            this.Syntymäpaikka.Text = "Syntymäpaikka";
            // 
            // tbSpaikka
            // 
            this.tbSpaikka.Location = new System.Drawing.Point(95, 156);
            this.tbSpaikka.Margin = new System.Windows.Forms.Padding(2);
            this.tbSpaikka.Name = "tbSpaikka";
            this.tbSpaikka.Size = new System.Drawing.Size(106, 20);
            this.tbSpaikka.TabIndex = 6;
            this.tbSpaikka.Validating += new System.ComponentModel.CancelEventHandler(this.tbSpaikka_Validating);
            this.tbSpaikka.Validated += new System.EventHandler(this.tbSpaikka_Validated);
            // 
            // cbSukupuoli
            // 
            this.cbSukupuoli.FormattingEnabled = true;
            this.cbSukupuoli.Items.AddRange(new object[] {
            "Mies",
            "Nainen"});
            this.cbSukupuoli.Location = new System.Drawing.Point(95, 89);
            this.cbSukupuoli.Name = "cbSukupuoli";
            this.cbSukupuoli.Size = new System.Drawing.Size(106, 21);
            this.cbSukupuoli.TabIndex = 3;
            this.cbSukupuoli.Validating += new System.ComponentModel.CancelEventHandler(this.cbSukupuoli_Validating);
            this.cbSukupuoli.Validated += new System.EventHandler(this.cbSukupuoli_Validated);
            // 
            // tbSaika
            // 
            this.tbSaika.Format = System.Windows.Forms.DateTimePickerFormat.Short;
            this.tbSaika.Location = new System.Drawing.Point(95, 134);
            this.tbSaika.Name = "tbSaika";
            this.tbSaika.Size = new System.Drawing.Size(106, 20);
            this.tbSaika.TabIndex = 5;
            this.tbSaika.Enter += new System.EventHandler(this.tbSaika_Enter);
            // 
            // panel2
            // 
            this.panel2.Controls.Add(this.Pakollinen1);
            this.panel2.Controls.Add(this.Pakollinen3);
            this.panel2.Controls.Add(this.Pakollinen2);
            this.panel2.Location = new System.Drawing.Point(221, 44);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(25, 66);
            this.panel2.TabIndex = 30;
            // 
            // Pakollinen1
            // 
            this.Pakollinen1.AutoSize = true;
            this.Pakollinen1.ForeColor = System.Drawing.Color.Red;
            this.Pakollinen1.Location = new System.Drawing.Point(3, 3);
            this.Pakollinen1.Name = "Pakollinen1";
            this.Pakollinen1.Size = new System.Drawing.Size(19, 13);
            this.Pakollinen1.TabIndex = 28;
            this.Pakollinen1.Text = "＊";
            this.Pakollinen1.MouseLeave += new System.EventHandler(this.label1_MouseLeave);
            this.Pakollinen1.MouseHover += new System.EventHandler(this.label1_MouseHover);
            // 
            // Pakollinen3
            // 
            this.Pakollinen3.AutoSize = true;
            this.Pakollinen3.ForeColor = System.Drawing.Color.Red;
            this.Pakollinen3.Location = new System.Drawing.Point(3, 48);
            this.Pakollinen3.Name = "Pakollinen3";
            this.Pakollinen3.Size = new System.Drawing.Size(19, 13);
            this.Pakollinen3.TabIndex = 29;
            this.Pakollinen3.Text = "＊";
            this.Pakollinen3.MouseLeave += new System.EventHandler(this.label2_MouseLeave);
            this.Pakollinen3.MouseHover += new System.EventHandler(this.label2_MouseHover);
            // 
            // Pakollinen2
            // 
            this.Pakollinen2.AutoSize = true;
            this.Pakollinen2.ForeColor = System.Drawing.Color.Red;
            this.Pakollinen2.Location = new System.Drawing.Point(3, 25);
            this.Pakollinen2.Name = "Pakollinen2";
            this.Pakollinen2.Size = new System.Drawing.Size(19, 13);
            this.Pakollinen2.TabIndex = 27;
            this.Pakollinen2.Text = "＊";
            this.Pakollinen2.MouseLeave += new System.EventHandler(this.Pakko_MouseLeave);
            this.Pakollinen2.MouseHover += new System.EventHandler(this.Pakko_MouseHover);
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.Status);
            this.panel1.Controls.Add(this.Ohjeteksti);
            this.panel1.Controls.Add(this.Tyhjä);
            this.panel1.Controls.Add(this.panel2);
            this.panel1.Controls.Add(this.tbSaika);
            this.panel1.Controls.Add(this.cbSukupuoli);
            this.panel1.Controls.Add(this.tbSpaikka);
            this.panel1.Controls.Add(this.Syntymäpaikka);
            this.panel1.Controls.Add(this.Sukupuoli);
            this.panel1.Controls.Add(this.Syntymäaika);
            this.panel1.Controls.Add(this.btnLisää);
            this.panel1.Controls.Add(this.tbIkä);
            this.panel1.Controls.Add(this.Ikä);
            this.panel1.Controls.Add(this.tbSukunimi);
            this.panel1.Controls.Add(this.Sukunimi);
            this.panel1.Controls.Add(this.Datanäyttö);
            this.panel1.Controls.Add(this.tbEtunimi);
            this.panel1.Controls.Add(this.Etunimi);
            this.panel1.Controls.Add(this.Menubaar);
            this.panel1.Location = new System.Drawing.Point(12, 12);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(652, 541);
            this.panel1.TabIndex = 0;
            // 
            // Status
            // 
            this.Status.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.toolStripStatusLabel1});
            this.Status.Location = new System.Drawing.Point(0, 519);
            this.Status.Name = "Status";
            this.Status.Size = new System.Drawing.Size(652, 22);
            this.Status.TabIndex = 34;
            // 
            // toolStripStatusLabel1
            // 
            this.toolStripStatusLabel1.Name = "toolStripStatusLabel1";
            this.toolStripStatusLabel1.Size = new System.Drawing.Size(0, 17);
            // 
            // Ohjeteksti
            // 
            this.Ohjeteksti.AutoSize = true;
            this.Ohjeteksti.Location = new System.Drawing.Point(15, 199);
            this.Ohjeteksti.Name = "Ohjeteksti";
            this.Ohjeteksti.Size = new System.Drawing.Size(347, 13);
            this.Ohjeteksti.TabIndex = 32;
            this.Ohjeteksti.Text = "*Voit poistaa ja muokata tietoja listasta klikkaamalla rivin päätyä tai solua";
            // 
            // Tyhjä
            // 
            this.Tyhjä.AutoSize = true;
            this.Tyhjä.Location = new System.Drawing.Point(218, 28);
            this.Tyhjä.Name = "Tyhjä";
            this.Tyhjä.Size = new System.Drawing.Size(29, 13);
            this.Tyhjä.TabIndex = 31;
            this.Tyhjä.Text = "tyhjä";
            this.Tyhjä.Visible = false;
            // 
            // Menubaar
            // 
            this.Menubaar.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.FileToolStripMenuItem,
            this.helpToolStripMenuItem});
            this.Menubaar.Location = new System.Drawing.Point(0, 0);
            this.Menubaar.Name = "Menubaar";
            this.Menubaar.Size = new System.Drawing.Size(652, 24);
            this.Menubaar.TabIndex = 8;
            this.Menubaar.Text = "menuStrip1";
            // 
            // FileToolStripMenuItem
            // 
            this.FileToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.openToolStripMenuItem1,
            this.saveToolStripMenuItem,
            this.sortByToolStripMenuItem,
            this.exitToolStripMenuItem});
            this.FileToolStripMenuItem.Name = "FileToolStripMenuItem";
            this.FileToolStripMenuItem.Size = new System.Drawing.Size(37, 20);
            this.FileToolStripMenuItem.Text = "File";
            // 
            // openToolStripMenuItem1
            // 
            this.openToolStripMenuItem1.Name = "openToolStripMenuItem1";
            this.openToolStripMenuItem1.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.O)));
            this.openToolStripMenuItem1.Size = new System.Drawing.Size(146, 22);
            this.openToolStripMenuItem1.Text = "Open";
            this.openToolStripMenuItem1.Click += new System.EventHandler(this.openToolStripMenuItem1_Click);
            this.openToolStripMenuItem1.MouseUp += new System.Windows.Forms.MouseEventHandler(this.openToolStripMenuItem1_MouseUp);
            // 
            // saveToolStripMenuItem
            // 
            this.saveToolStripMenuItem.Name = "saveToolStripMenuItem";
            this.saveToolStripMenuItem.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.S)));
            this.saveToolStripMenuItem.Size = new System.Drawing.Size(146, 22);
            this.saveToolStripMenuItem.Text = "Save";
            this.saveToolStripMenuItem.Click += new System.EventHandler(this.saveToolStripMenuItem_Click);
            this.saveToolStripMenuItem.MouseUp += new System.Windows.Forms.MouseEventHandler(this.saveToolStripMenuItem_MouseUp);
            // 
            // sortByToolStripMenuItem
            // 
            this.sortByToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.alphabeticalToolStripMenuItem,
            this.dateOfBirthToolStripMenuItem});
            this.sortByToolStripMenuItem.Name = "sortByToolStripMenuItem";
            this.sortByToolStripMenuItem.Size = new System.Drawing.Size(146, 22);
            this.sortByToolStripMenuItem.Text = "Sort by:";
            // 
            // alphabeticalToolStripMenuItem
            // 
            this.alphabeticalToolStripMenuItem.Name = "alphabeticalToolStripMenuItem";
            this.alphabeticalToolStripMenuItem.Size = new System.Drawing.Size(140, 22);
            this.alphabeticalToolStripMenuItem.Text = "Alphabetical";
            this.alphabeticalToolStripMenuItem.Click += new System.EventHandler(this.alphabeticalToolStripMenuItem_Click);
            this.alphabeticalToolStripMenuItem.MouseUp += new System.Windows.Forms.MouseEventHandler(this.alphabeticalToolStripMenuItem_MouseUp);
            // 
            // dateOfBirthToolStripMenuItem
            // 
            this.dateOfBirthToolStripMenuItem.Name = "dateOfBirthToolStripMenuItem";
            this.dateOfBirthToolStripMenuItem.Size = new System.Drawing.Size(140, 22);
            this.dateOfBirthToolStripMenuItem.Text = "Date of Birth";
            this.dateOfBirthToolStripMenuItem.Click += new System.EventHandler(this.dateOfBirthToolStripMenuItem_Click);
            this.dateOfBirthToolStripMenuItem.MouseUp += new System.Windows.Forms.MouseEventHandler(this.dateOfBirthToolStripMenuItem_MouseUp);
            // 
            // exitToolStripMenuItem
            // 
            this.exitToolStripMenuItem.Name = "exitToolStripMenuItem";
            this.exitToolStripMenuItem.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Alt | System.Windows.Forms.Keys.F4)));
            this.exitToolStripMenuItem.Size = new System.Drawing.Size(146, 22);
            this.exitToolStripMenuItem.Text = "Exit";
            this.exitToolStripMenuItem.Click += new System.EventHandler(this.exitToolStripMenuItem_Click);
            // 
            // helpToolStripMenuItem
            // 
            this.helpToolStripMenuItem.Name = "helpToolStripMenuItem";
            this.helpToolStripMenuItem.Size = new System.Drawing.Size(44, 20);
            this.helpToolStripMenuItem.Text = "Help";
            this.helpToolStripMenuItem.Click += new System.EventHandler(this.helpToolStripMenuItem_Click);
            // 
            // Harjoitustyö
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(676, 562);
            this.Controls.Add(this.panel1);
            this.MainMenuStrip = this.Menubaar;
            this.Name = "Harjoitustyö";
            this.Text = "Harjoitustyö";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.Harjoitustyö_FormClosing);
            this.Load += new System.EventHandler(this.Harjoitustyö_Load);
            ((System.ComponentModel.ISupportInitialize)(this.Errorkuvake)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.Datanäyttö)).EndInit();
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.Status.ResumeLayout(false);
            this.Status.PerformLayout();
            this.Menubaar.ResumeLayout(false);
            this.Menubaar.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.ErrorProvider Errorkuvake;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Label Pakollinen1;
        private System.Windows.Forms.Label Pakollinen3;
        private System.Windows.Forms.Label Pakollinen2;
        private System.Windows.Forms.ComboBox cbSukupuoli;
        private System.Windows.Forms.TextBox tbSpaikka;
        private System.Windows.Forms.Label Syntymäpaikka;
        private System.Windows.Forms.Label Sukupuoli;
        private System.Windows.Forms.Label Syntymäaika;
        private System.Windows.Forms.Button btnLisää;
        private System.Windows.Forms.TextBox tbIkä;
        private System.Windows.Forms.Label Ikä;
        private System.Windows.Forms.TextBox tbSukunimi;
        private System.Windows.Forms.Label Sukunimi;
        private System.Windows.Forms.DataGridView Datanäyttö;
        private System.Windows.Forms.TextBox tbEtunimi;
        private System.Windows.Forms.Label Etunimi;
        private System.Windows.Forms.Label Tyhjä;
        private System.Windows.Forms.Label Ohjeteksti;
        private System.Windows.Forms.MenuStrip Menubaar;
        private System.Windows.Forms.ToolStripMenuItem FileToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem openToolStripMenuItem1;
        private System.Windows.Forms.ToolStripMenuItem saveToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem sortByToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem alphabeticalToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem dateOfBirthToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem exitToolStripMenuItem;
        private System.Windows.Forms.StatusStrip Status;
        private System.Windows.Forms.ToolStripStatusLabel toolStripStatusLabel1;
        private System.Windows.Forms.DateTimePicker tbSaika;
        private System.Windows.Forms.ToolStripMenuItem helpToolStripMenuItem;
    }
=======
﻿namespace WindowsFormsApp5
{
    partial class Harjoitustyö
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.Errorkuvake = new System.Windows.Forms.ErrorProvider(this.components);
            this.Etunimi = new System.Windows.Forms.Label();
            this.tbEtunimi = new System.Windows.Forms.TextBox();
            this.Datanäyttö = new System.Windows.Forms.DataGridView();
            this.Sukunimi = new System.Windows.Forms.Label();
            this.tbSukunimi = new System.Windows.Forms.TextBox();
            this.Ikä = new System.Windows.Forms.Label();
            this.tbIkä = new System.Windows.Forms.TextBox();
            this.btnLisää = new System.Windows.Forms.Button();
            this.Syntymäaika = new System.Windows.Forms.Label();
            this.Sukupuoli = new System.Windows.Forms.Label();
            this.Syntymäpaikka = new System.Windows.Forms.Label();
            this.tbSpaikka = new System.Windows.Forms.TextBox();
            this.cbSukupuoli = new System.Windows.Forms.ComboBox();
            this.tbSaika = new System.Windows.Forms.DateTimePicker();
            this.panel2 = new System.Windows.Forms.Panel();
            this.Pakollinen1 = new System.Windows.Forms.Label();
            this.Pakollinen3 = new System.Windows.Forms.Label();
            this.Pakollinen2 = new System.Windows.Forms.Label();
            this.panel1 = new System.Windows.Forms.Panel();
            this.Status = new System.Windows.Forms.StatusStrip();
            this.toolStripStatusLabel1 = new System.Windows.Forms.ToolStripStatusLabel();
            this.Ohjeteksti = new System.Windows.Forms.Label();
            this.Tyhjä = new System.Windows.Forms.Label();
            this.Menubaar = new System.Windows.Forms.MenuStrip();
            this.FileToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.openToolStripMenuItem1 = new System.Windows.Forms.ToolStripMenuItem();
            this.saveToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.sortByToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.alphabeticalToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.dateOfBirthToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.exitToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.helpToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            ((System.ComponentModel.ISupportInitialize)(this.Errorkuvake)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.Datanäyttö)).BeginInit();
            this.panel2.SuspendLayout();
            this.panel1.SuspendLayout();
            this.Status.SuspendLayout();
            this.Menubaar.SuspendLayout();
            this.SuspendLayout();
            // 
            // Errorkuvake
            // 
            this.Errorkuvake.ContainerControl = this;
            // 
            // Etunimi
            // 
            this.Etunimi.AutoSize = true;
            this.Etunimi.Location = new System.Drawing.Point(15, 46);
            this.Etunimi.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.Etunimi.Name = "Etunimi";
            this.Etunimi.Size = new System.Drawing.Size(41, 13);
            this.Etunimi.TabIndex = 12;
            this.Etunimi.Text = "Etunimi";
            // 
            // tbEtunimi
            // 
            this.tbEtunimi.Location = new System.Drawing.Point(95, 44);
            this.tbEtunimi.Margin = new System.Windows.Forms.Padding(2);
            this.tbEtunimi.Name = "tbEtunimi";
            this.tbEtunimi.Size = new System.Drawing.Size(106, 20);
            this.tbEtunimi.TabIndex = 1;
            this.tbEtunimi.Validating += new System.ComponentModel.CancelEventHandler(this.tbEtunimi_Validating);
            this.tbEtunimi.Validated += new System.EventHandler(this.tbEtunimi_Validated);
            // 
            // Datanäyttö
            // 
            this.Datanäyttö.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.Datanäyttö.Location = new System.Drawing.Point(6, 214);
            this.Datanäyttö.Margin = new System.Windows.Forms.Padding(2);
            this.Datanäyttö.Name = "Datanäyttö";
            this.Datanäyttö.RowTemplate.Height = 24;
            this.Datanäyttö.Size = new System.Drawing.Size(644, 317);
            this.Datanäyttö.TabIndex = 10;
            this.Datanäyttö.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView1_CellClick);
            // 
            // Sukunimi
            // 
            this.Sukunimi.AutoSize = true;
            this.Sukunimi.Location = new System.Drawing.Point(15, 69);
            this.Sukunimi.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.Sukunimi.Name = "Sukunimi";
            this.Sukunimi.Size = new System.Drawing.Size(50, 13);
            this.Sukunimi.TabIndex = 20;
            this.Sukunimi.Text = "Sukunimi";
            // 
            // tbSukunimi
            // 
            this.tbSukunimi.Location = new System.Drawing.Point(95, 66);
            this.tbSukunimi.Margin = new System.Windows.Forms.Padding(2);
            this.tbSukunimi.Name = "tbSukunimi";
            this.tbSukunimi.Size = new System.Drawing.Size(106, 20);
            this.tbSukunimi.TabIndex = 2;
            this.tbSukunimi.Validating += new System.ComponentModel.CancelEventHandler(this.tbSukunimi_Validating);
            this.tbSukunimi.Validated += new System.EventHandler(this.tbSukunimi_Validated);
            // 
            // Ikä
            // 
            this.Ikä.AutoSize = true;
            this.Ikä.Location = new System.Drawing.Point(15, 112);
            this.Ikä.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.Ikä.Name = "Ikä";
            this.Ikä.Size = new System.Drawing.Size(22, 13);
            this.Ikä.TabIndex = 21;
            this.Ikä.Text = "Ikä";
            // 
            // tbIkä
            // 
            this.tbIkä.Location = new System.Drawing.Point(95, 112);
            this.tbIkä.Margin = new System.Windows.Forms.Padding(2);
            this.tbIkä.Name = "tbIkä";
            this.tbIkä.Size = new System.Drawing.Size(106, 20);
            this.tbIkä.TabIndex = 4;
            this.tbIkä.Validating += new System.ComponentModel.CancelEventHandler(this.tbIkä_Validating);
            this.tbIkä.Validated += new System.EventHandler(this.tbIkä_Validated);
            // 
            // btnLisää
            // 
            this.btnLisää.Location = new System.Drawing.Point(251, 44);
            this.btnLisää.Margin = new System.Windows.Forms.Padding(2);
            this.btnLisää.Name = "btnLisää";
            this.btnLisää.Size = new System.Drawing.Size(93, 42);
            this.btnLisää.TabIndex = 7;
            this.btnLisää.Text = "Lisää";
            this.btnLisää.UseVisualStyleBackColor = true;
            this.btnLisää.Click += new System.EventHandler(this.btnLisää_Click);
            // 
            // Syntymäaika
            // 
            this.Syntymäaika.AutoSize = true;
            this.Syntymäaika.Location = new System.Drawing.Point(15, 134);
            this.Syntymäaika.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.Syntymäaika.Name = "Syntymäaika";
            this.Syntymäaika.Size = new System.Drawing.Size(67, 13);
            this.Syntymäaika.TabIndex = 23;
            this.Syntymäaika.Text = "Syntymäaika";
            // 
            // Sukupuoli
            // 
            this.Sukupuoli.AutoSize = true;
            this.Sukupuoli.Location = new System.Drawing.Point(15, 89);
            this.Sukupuoli.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.Sukupuoli.Name = "Sukupuoli";
            this.Sukupuoli.Size = new System.Drawing.Size(54, 13);
            this.Sukupuoli.TabIndex = 24;
            this.Sukupuoli.Text = "Sukupuoli";
            // 
            // Syntymäpaikka
            // 
            this.Syntymäpaikka.AutoSize = true;
            this.Syntymäpaikka.Location = new System.Drawing.Point(15, 156);
            this.Syntymäpaikka.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.Syntymäpaikka.Name = "Syntymäpaikka";
            this.Syntymäpaikka.Size = new System.Drawing.Size(79, 13);
            this.Syntymäpaikka.TabIndex = 25;
            this.Syntymäpaikka.Text = "Syntymäpaikka";
            // 
            // tbSpaikka
            // 
            this.tbSpaikka.Location = new System.Drawing.Point(95, 156);
            this.tbSpaikka.Margin = new System.Windows.Forms.Padding(2);
            this.tbSpaikka.Name = "tbSpaikka";
            this.tbSpaikka.Size = new System.Drawing.Size(106, 20);
            this.tbSpaikka.TabIndex = 6;
            this.tbSpaikka.Validating += new System.ComponentModel.CancelEventHandler(this.tbSpaikka_Validating);
            this.tbSpaikka.Validated += new System.EventHandler(this.tbSpaikka_Validated);
            // 
            // cbSukupuoli
            // 
            this.cbSukupuoli.FormattingEnabled = true;
            this.cbSukupuoli.Items.AddRange(new object[] {
            "Mies",
            "Nainen"});
            this.cbSukupuoli.Location = new System.Drawing.Point(95, 89);
            this.cbSukupuoli.Name = "cbSukupuoli";
            this.cbSukupuoli.Size = new System.Drawing.Size(106, 21);
            this.cbSukupuoli.TabIndex = 3;
            this.cbSukupuoli.Validating += new System.ComponentModel.CancelEventHandler(this.cbSukupuoli_Validating);
            this.cbSukupuoli.Validated += new System.EventHandler(this.cbSukupuoli_Validated);
            // 
            // tbSaika
            // 
            this.tbSaika.Format = System.Windows.Forms.DateTimePickerFormat.Short;
            this.tbSaika.Location = new System.Drawing.Point(95, 134);
            this.tbSaika.Name = "tbSaika";
            this.tbSaika.Size = new System.Drawing.Size(106, 20);
            this.tbSaika.TabIndex = 5;
            this.tbSaika.Enter += new System.EventHandler(this.tbSaika_Enter);
            // 
            // panel2
            // 
            this.panel2.Controls.Add(this.Pakollinen1);
            this.panel2.Controls.Add(this.Pakollinen3);
            this.panel2.Controls.Add(this.Pakollinen2);
            this.panel2.Location = new System.Drawing.Point(221, 44);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(25, 66);
            this.panel2.TabIndex = 30;
            // 
            // Pakollinen1
            // 
            this.Pakollinen1.AutoSize = true;
            this.Pakollinen1.ForeColor = System.Drawing.Color.Red;
            this.Pakollinen1.Location = new System.Drawing.Point(3, 3);
            this.Pakollinen1.Name = "Pakollinen1";
            this.Pakollinen1.Size = new System.Drawing.Size(19, 13);
            this.Pakollinen1.TabIndex = 28;
            this.Pakollinen1.Text = "＊";
            this.Pakollinen1.MouseLeave += new System.EventHandler(this.label1_MouseLeave);
            this.Pakollinen1.MouseHover += new System.EventHandler(this.label1_MouseHover);
            // 
            // Pakollinen3
            // 
            this.Pakollinen3.AutoSize = true;
            this.Pakollinen3.ForeColor = System.Drawing.Color.Red;
            this.Pakollinen3.Location = new System.Drawing.Point(3, 48);
            this.Pakollinen3.Name = "Pakollinen3";
            this.Pakollinen3.Size = new System.Drawing.Size(19, 13);
            this.Pakollinen3.TabIndex = 29;
            this.Pakollinen3.Text = "＊";
            this.Pakollinen3.MouseLeave += new System.EventHandler(this.label2_MouseLeave);
            this.Pakollinen3.MouseHover += new System.EventHandler(this.label2_MouseHover);
            // 
            // Pakollinen2
            // 
            this.Pakollinen2.AutoSize = true;
            this.Pakollinen2.ForeColor = System.Drawing.Color.Red;
            this.Pakollinen2.Location = new System.Drawing.Point(3, 25);
            this.Pakollinen2.Name = "Pakollinen2";
            this.Pakollinen2.Size = new System.Drawing.Size(19, 13);
            this.Pakollinen2.TabIndex = 27;
            this.Pakollinen2.Text = "＊";
            this.Pakollinen2.MouseLeave += new System.EventHandler(this.Pakko_MouseLeave);
            this.Pakollinen2.MouseHover += new System.EventHandler(this.Pakko_MouseHover);
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.Status);
            this.panel1.Controls.Add(this.Ohjeteksti);
            this.panel1.Controls.Add(this.Tyhjä);
            this.panel1.Controls.Add(this.panel2);
            this.panel1.Controls.Add(this.tbSaika);
            this.panel1.Controls.Add(this.cbSukupuoli);
            this.panel1.Controls.Add(this.tbSpaikka);
            this.panel1.Controls.Add(this.Syntymäpaikka);
            this.panel1.Controls.Add(this.Sukupuoli);
            this.panel1.Controls.Add(this.Syntymäaika);
            this.panel1.Controls.Add(this.btnLisää);
            this.panel1.Controls.Add(this.tbIkä);
            this.panel1.Controls.Add(this.Ikä);
            this.panel1.Controls.Add(this.tbSukunimi);
            this.panel1.Controls.Add(this.Sukunimi);
            this.panel1.Controls.Add(this.Datanäyttö);
            this.panel1.Controls.Add(this.tbEtunimi);
            this.panel1.Controls.Add(this.Etunimi);
            this.panel1.Controls.Add(this.Menubaar);
            this.panel1.Location = new System.Drawing.Point(12, 12);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(652, 541);
            this.panel1.TabIndex = 0;
            // 
            // Status
            // 
            this.Status.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.toolStripStatusLabel1});
            this.Status.Location = new System.Drawing.Point(0, 519);
            this.Status.Name = "Status";
            this.Status.Size = new System.Drawing.Size(652, 22);
            this.Status.TabIndex = 34;
            // 
            // toolStripStatusLabel1
            // 
            this.toolStripStatusLabel1.Name = "toolStripStatusLabel1";
            this.toolStripStatusLabel1.Size = new System.Drawing.Size(0, 17);
            // 
            // Ohjeteksti
            // 
            this.Ohjeteksti.AutoSize = true;
            this.Ohjeteksti.Location = new System.Drawing.Point(15, 199);
            this.Ohjeteksti.Name = "Ohjeteksti";
            this.Ohjeteksti.Size = new System.Drawing.Size(347, 13);
            this.Ohjeteksti.TabIndex = 32;
            this.Ohjeteksti.Text = "*Voit poistaa ja muokata tietoja listasta klikkaamalla rivin päätyä tai solua";
            // 
            // Tyhjä
            // 
            this.Tyhjä.AutoSize = true;
            this.Tyhjä.Location = new System.Drawing.Point(218, 28);
            this.Tyhjä.Name = "Tyhjä";
            this.Tyhjä.Size = new System.Drawing.Size(29, 13);
            this.Tyhjä.TabIndex = 31;
            this.Tyhjä.Text = "tyhjä";
            this.Tyhjä.Visible = false;
            // 
            // Menubaar
            // 
            this.Menubaar.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.FileToolStripMenuItem,
            this.helpToolStripMenuItem});
            this.Menubaar.Location = new System.Drawing.Point(0, 0);
            this.Menubaar.Name = "Menubaar";
            this.Menubaar.Size = new System.Drawing.Size(652, 24);
            this.Menubaar.TabIndex = 8;
            this.Menubaar.Text = "menuStrip1";
            // 
            // FileToolStripMenuItem
            // 
            this.FileToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.openToolStripMenuItem1,
            this.saveToolStripMenuItem,
            this.sortByToolStripMenuItem,
            this.exitToolStripMenuItem});
            this.FileToolStripMenuItem.Name = "FileToolStripMenuItem";
            this.FileToolStripMenuItem.Size = new System.Drawing.Size(37, 20);
            this.FileToolStripMenuItem.Text = "File";
            // 
            // openToolStripMenuItem1
            // 
            this.openToolStripMenuItem1.Name = "openToolStripMenuItem1";
            this.openToolStripMenuItem1.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.O)));
            this.openToolStripMenuItem1.Size = new System.Drawing.Size(146, 22);
            this.openToolStripMenuItem1.Text = "Open";
            this.openToolStripMenuItem1.Click += new System.EventHandler(this.openToolStripMenuItem1_Click);
            this.openToolStripMenuItem1.MouseUp += new System.Windows.Forms.MouseEventHandler(this.openToolStripMenuItem1_MouseUp);
            // 
            // saveToolStripMenuItem
            // 
            this.saveToolStripMenuItem.Name = "saveToolStripMenuItem";
            this.saveToolStripMenuItem.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.S)));
            this.saveToolStripMenuItem.Size = new System.Drawing.Size(146, 22);
            this.saveToolStripMenuItem.Text = "Save";
            this.saveToolStripMenuItem.Click += new System.EventHandler(this.saveToolStripMenuItem_Click);
            this.saveToolStripMenuItem.MouseUp += new System.Windows.Forms.MouseEventHandler(this.saveToolStripMenuItem_MouseUp);
            // 
            // sortByToolStripMenuItem
            // 
            this.sortByToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.alphabeticalToolStripMenuItem,
            this.dateOfBirthToolStripMenuItem});
            this.sortByToolStripMenuItem.Name = "sortByToolStripMenuItem";
            this.sortByToolStripMenuItem.Size = new System.Drawing.Size(146, 22);
            this.sortByToolStripMenuItem.Text = "Sort by:";
            // 
            // alphabeticalToolStripMenuItem
            // 
            this.alphabeticalToolStripMenuItem.Name = "alphabeticalToolStripMenuItem";
            this.alphabeticalToolStripMenuItem.Size = new System.Drawing.Size(140, 22);
            this.alphabeticalToolStripMenuItem.Text = "Alphabetical";
            this.alphabeticalToolStripMenuItem.Click += new System.EventHandler(this.alphabeticalToolStripMenuItem_Click);
            this.alphabeticalToolStripMenuItem.MouseUp += new System.Windows.Forms.MouseEventHandler(this.alphabeticalToolStripMenuItem_MouseUp);
            // 
            // dateOfBirthToolStripMenuItem
            // 
            this.dateOfBirthToolStripMenuItem.Name = "dateOfBirthToolStripMenuItem";
            this.dateOfBirthToolStripMenuItem.Size = new System.Drawing.Size(140, 22);
            this.dateOfBirthToolStripMenuItem.Text = "Date of Birth";
            this.dateOfBirthToolStripMenuItem.Click += new System.EventHandler(this.dateOfBirthToolStripMenuItem_Click);
            this.dateOfBirthToolStripMenuItem.MouseUp += new System.Windows.Forms.MouseEventHandler(this.dateOfBirthToolStripMenuItem_MouseUp);
            // 
            // exitToolStripMenuItem
            // 
            this.exitToolStripMenuItem.Name = "exitToolStripMenuItem";
            this.exitToolStripMenuItem.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Alt | System.Windows.Forms.Keys.F4)));
            this.exitToolStripMenuItem.Size = new System.Drawing.Size(146, 22);
            this.exitToolStripMenuItem.Text = "Exit";
            this.exitToolStripMenuItem.Click += new System.EventHandler(this.exitToolStripMenuItem_Click);
            // 
            // helpToolStripMenuItem
            // 
            this.helpToolStripMenuItem.Name = "helpToolStripMenuItem";
            this.helpToolStripMenuItem.Size = new System.Drawing.Size(44, 20);
            this.helpToolStripMenuItem.Text = "Help";
            this.helpToolStripMenuItem.Click += new System.EventHandler(this.helpToolStripMenuItem_Click);
            // 
            // Harjoitustyö
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(676, 562);
            this.Controls.Add(this.panel1);
            this.MainMenuStrip = this.Menubaar;
            this.Name = "Harjoitustyö";
            this.Text = "Harjoitustyö";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.Harjoitustyö_FormClosing);
            this.Load += new System.EventHandler(this.Harjoitustyö_Load);
            ((System.ComponentModel.ISupportInitialize)(this.Errorkuvake)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.Datanäyttö)).EndInit();
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.Status.ResumeLayout(false);
            this.Status.PerformLayout();
            this.Menubaar.ResumeLayout(false);
            this.Menubaar.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.ErrorProvider Errorkuvake;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Label Pakollinen1;
        private System.Windows.Forms.Label Pakollinen3;
        private System.Windows.Forms.Label Pakollinen2;
        private System.Windows.Forms.ComboBox cbSukupuoli;
        private System.Windows.Forms.TextBox tbSpaikka;
        private System.Windows.Forms.Label Syntymäpaikka;
        private System.Windows.Forms.Label Sukupuoli;
        private System.Windows.Forms.Label Syntymäaika;
        private System.Windows.Forms.Button btnLisää;
        private System.Windows.Forms.TextBox tbIkä;
        private System.Windows.Forms.Label Ikä;
        private System.Windows.Forms.TextBox tbSukunimi;
        private System.Windows.Forms.Label Sukunimi;
        private System.Windows.Forms.DataGridView Datanäyttö;
        private System.Windows.Forms.TextBox tbEtunimi;
        private System.Windows.Forms.Label Etunimi;
        private System.Windows.Forms.Label Tyhjä;
        private System.Windows.Forms.Label Ohjeteksti;
        private System.Windows.Forms.MenuStrip Menubaar;
        private System.Windows.Forms.ToolStripMenuItem FileToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem openToolStripMenuItem1;
        private System.Windows.Forms.ToolStripMenuItem saveToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem sortByToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem alphabeticalToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem dateOfBirthToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem exitToolStripMenuItem;
        private System.Windows.Forms.StatusStrip Status;
        private System.Windows.Forms.ToolStripStatusLabel toolStripStatusLabel1;
        private System.Windows.Forms.DateTimePicker tbSaika;
        private System.Windows.Forms.ToolStripMenuItem helpToolStripMenuItem;
    }
>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
}