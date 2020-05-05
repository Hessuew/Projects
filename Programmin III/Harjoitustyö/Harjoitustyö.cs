using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using Newtonsoft.Json;
using System.Runtime.Serialization.Formatters.Binary;

namespace WindowsFormsApp5      // Olen jättänyt 4 rivin välin eri kokonaisuuksien väliin ,jotta ne erottaa helpommin koodista.
{

    // Listan teko, JSON, lisää nappi, load ja formclosing.

    public partial class Harjoitustyö : Form                
    {   // Listan teko,
        private string henkilötfile = "henkilöt.json";       

        List<Henkilö> tiedot = new List<Henkilö>();

        [Serializable]
        public struct Henkilö
        {
            public string etunimi;
            public string Etunimi { get => etunimi; }
            public string sukunimi;
            public string Sukunimi { get => sukunimi; }
            public string sukupuoli;
            public string Sukupuoli { get => sukupuoli; }
            public int ikä;
            public int Ikä { get => ikä; }
            public DateTime syntymäaika;
            public DateTime Syntymäaika { get => syntymäaika; }
            public string syntymäpaikka;
            public string Syntymäpaikka { get => syntymäpaikka; }
        }

        public void SerializeJSON(List<Henkilö> input)
        {   // JSON
            string json = JsonConvert.SerializeObject(input);

            File.WriteAllText(henkilötfile, json);
        }

        public List<Henkilö> DeserializeJSON()
        {   // JSON
            if (File.Exists(henkilötfile))
            {
                using (StreamReader a = new StreamReader(henkilötfile))
                {
                    string json = a.ReadToEnd();
                    return JsonConvert.DeserializeObject<List<Henkilö>>(json);
                }
            }
            else
                return null;
        }

        public Harjoitustyö()
        {
            InitializeComponent();
        }

        private void Harjoitustyö_Load(object sender, EventArgs e)
        { // Load, tietojen lataus.
            tiedot = DeserializeJSON();
            Datanäyttö.DataSource = tiedot;
            Datanäyttö.Refresh();
        }

        private void Harjoitustyö_FormClosing(object sender, FormClosingEventArgs e)
        {   // Formclosing, autovalidate pois päältä.
            AutoValidate = AutoValidate.Disable;
        }

        // Tästä alkaa eri kenttien validointi. Tein etunimem, sukunimen ja sukupuolen pakollisiksi kentiksi.


        private void tbEtunimi_Validated(object sender, EventArgs e)
        {   //Etunimen validointi.
            Errorkuvake.SetError(tbEtunimi, "");
        }

        private void tbEtunimi_Validating(object sender, CancelEventArgs e)
        {   //Etunimen validointi.
            string errorMsg;
            if (!ValidEtunimi(tbEtunimi.Text, out errorMsg))
            {

                e.Cancel = true;
                tbEtunimi.Select(0, tbEtunimi.Text.Length);

                this.Errorkuvake.SetError(tbEtunimi, errorMsg);
            }
        }
        public bool ValidEtunimi(string firstname, out string errorMessage)
        {   //Etunimen validointi. Ei voi olla tyhjä kenttä ja voi sisältää vain kirjaimia.
            bool result = tbEtunimi.Text.All(Char.IsLetter);

            if (firstname.Length > 0)
            {
                if (result == false)
                {
                    errorMessage = "Etunimi voi sisältää vain kirjaimia";
                    return false;
                }
                if (result == true)
                {
                    errorMessage = "";
                    return true;
                }
            }

            errorMessage = "";
            return true;
        }




        private void tbSukunimi_Validated(object sender, EventArgs e)
        {   //Sukunimen validointi.
            Errorkuvake.SetError(tbSukunimi, "");
        }

        private void tbSukunimi_Validating(object sender, CancelEventArgs e)
        {   //Sukunimen validointi.
            string errorMsg;
            if (!ValidSukunimi(tbSukunimi.Text, out errorMsg))
            {

                e.Cancel = true;
                tbSukunimi.Select(0, tbSukunimi.Text.Length);

                this.Errorkuvake.SetError(tbSukunimi, errorMsg);
            }
        }

        public bool ValidSukunimi(string lastname, out string errorMessage)
        {   //Sukunimen validointi. Ei voi olla tyhjä kenttä ja voi sisältää vain kirjaimia.
            bool result = tbSukunimi.Text.All(Char.IsLetter);

            if (lastname.Length > 0)
            {
                if (result == false)
                {
                    errorMessage = "Sukunimi voi sisältää vain kirjaimia";
                    return false;
                }
                if (result == true)
                {
                    errorMessage = "";
                    return true;
                }
            }
            errorMessage = "";
            return true;
        }




        private void cbSukupuoli_Validated(object sender, EventArgs e)
        {   //Sukupuolen validointi. 
            Errorkuvake.SetError(cbSukupuoli, "");
        }

        private void cbSukupuoli_Validating(object sender, CancelEventArgs e)
        {   //Sukupuolen validointi. 
            string errorMsg;
            if (!ValidSukupuoli(cbSukupuoli.Text, out errorMsg))
            {

                e.Cancel = true;
                cbSukupuoli.Select(0, cbSukupuoli.Text.Length);

                this.Errorkuvake.SetError(cbSukupuoli, errorMsg);
            }
        }

        public bool ValidSukupuoli(string sex, out string errorMessage)
        {   //Sukupuolen validointi. Voi olla vain Mies/Nainen.
            if (sex.Length > 0)
            {

                if (sex == "Mies" || sex == "Nainen")
                {
                    errorMessage = "";
                    return true;
                }
                else
                {
                    MessageBox.Show("Sukupuoli voi olla Mies/Nainen?", "", MessageBoxButtons.OK);
                }
            }

            errorMessage = "";
            return true;
        }




        private void tbIkä_Validated(object sender, EventArgs e)
        {   //Iän validointi. 
            Errorkuvake.SetError(tbIkä, "");
        }

        private void tbIkä_Validating(object sender, CancelEventArgs e)
        {   //Iän validointi.
                string errorMsg;
                if (!ValidIkä(tbIkä.Text, out errorMsg))
                {

                    e.Cancel = true;
                    tbIkä.Select(0, tbIkä.Text.Length);

                    this.Errorkuvake.SetError(tbIkä, errorMsg);
                }
        }
        public bool ValidIkä(string age1, out string errorMessage)
        {   //Iän validointi. Voi sisältää vain numeroita ja ei voi olla pienempi kuin 0 tai suurempi kuin 120
            int age; 


            if (!int.TryParse(age1, out age)){
                errorMessage = "Ikä voi sisältää vain numeroita";
                return false;
            }

            if (age < 0 || age > 121)
            {
               errorMessage = "Ikä ei voi olla pienempi kuin 0 tai suurempi kuin 120";
               return false;
            }
            if (age > 0 && age < 121)
            {
               errorMessage = "";
               return true;
            }             
            errorMessage = "";
            return false;
        }




        private void tbSaika_Enter(object sender, EventArgs e)
        {   //Syntymäajan maksimi päivämäärä on päivä, jolloin ohjelmaa käytetään.
            tbSaika.MaxDate = DateTime.Now;
        }




        private void tbSpaikka_Validated(object sender, EventArgs e)
        {   //Syntymäpaikan validointi.
            Errorkuvake.SetError(tbSpaikka, "");
        }

        private void tbSpaikka_Validating(object sender, CancelEventArgs e)
        {   //Syntymäpaikan validointi.
            string errorMsg;
            if (!ValidSyntymäpaikka(tbSpaikka.Text, out errorMsg))
            {

                e.Cancel = true;
                tbSpaikka.Select(0, tbSpaikka.Text.Length);

                this.Errorkuvake.SetError(tbSpaikka, errorMsg);
            }
        }
        public bool ValidSyntymäpaikka(string syntymäpaikka, out string errorMessage)
        {   //Syntymäpaikan validointi. Voi sisältää vain kirjaimia jos tekstin pituus on suurempi kuin 0.
            bool result = tbSpaikka.Text.All(Char.IsLetter);

            if (syntymäpaikka.Length > 0)
            {
                if (result == false)
                {
                    errorMessage = "Syntymäpaikka voi sisältää vain kirjaimia";
                    return false;
                }
                if (result == true)
                {
                    errorMessage = "";
                    return true;
                }
            }
            errorMessage = "";
            return true;
        }


        // Tässä rivin muokkaus, ja tietyn paikan muokkaus.


        private void dataGridView1_CellClick(object sender, DataGridViewCellEventArgs e)
        {   //Rivin muokkaus rivin päätyä napsauttamalla, palauttaa tiedot tb:eihin ja kohdentaa kursorin siihen tietoon, mitä käyttäjä on clikannut.

            try
            { 
            int rivi = e.RowIndex;
            Henkilö a = tiedot[rivi];
            tbEtunimi.Text = a.etunimi;
            tbSukunimi.Text = a.sukunimi;
            cbSukupuoli.Text = a.sukupuoli;
            tbIkä.Text = a.ikä.ToString();
            tbSaika.Text = a.syntymäaika.ToString();
            tbSpaikka.Text = a.syntymäpaikka;
            tiedot.Remove(a);
            Datanäyttö.DataSource = null;
            Datanäyttö.DataSource = tiedot;
            Datanäyttö.Refresh();

            if (e.ColumnIndex == 0)
            {
                tbEtunimi.Focus();
                tbEtunimi.SelectionStart = tbEtunimi.Text.Length;
            }
            else if (e.ColumnIndex == 1)
            {
                tbSukunimi.Focus();
                tbSukunimi.SelectionStart = tbSukunimi.Text.Length;
            }
            else if (e.ColumnIndex == 2)
            {
                cbSukupuoli.Focus();
                cbSukupuoli.SelectionStart = cbSukupuoli.Text.Length;
            }
            else if (e.ColumnIndex == 3)
            {
                tbIkä.Focus();
                tbIkä.SelectionStart = tbIkä.Text.Length;
            }
            else if (e.ColumnIndex == 4)
            {
                tbSaika.Focus();
            }
            else if (e.ColumnIndex == 5)
            {
                tbSpaikka.Focus();
                tbSpaikka.SelectionStart = tbSpaikka.Text.Length;
            }
        }   catch (Exception)
            {
                
            }
        }


        /* Etunimen, sukunimen ja sukupuolen kenttien päädyssä oleva pakollinen merkki, ja siihen liikuttaessa ilmestyvä "pakollinen" teksi.
           Teksti ilmestyy hiiren yläpuolelle: aiemman rivin "pakollinen merkin" kohdalle ja hiiren vienti etunimen perässä olevaan merkkiin tuo tekstin label "tyhjä:än" jonka loin tätä varten.
        */

        ToolTip ToolTip1 = new ToolTip();

        private void label1_MouseHover(object sender, EventArgs e)
        {   // Hiiren vienti etunimen perässä olevaan merkkiin.
            ToolTip1.Show("Pakollinen", Tyhjä);
        }

        private void label1_MouseLeave(object sender, EventArgs e)
        {   // Hiiren siirto merkin päältä.
            ToolTip1.Hide(Tyhjä);
        }

        private void Pakko_MouseHover(object sender, EventArgs e)
        {   // Hiiren vienti sukunimen perässä olevaan merkkiin.
            ToolTip1.Show("Pakollinen", Pakollinen1);
        }

        private void Pakko_MouseLeave(object sender, EventArgs e)
        {   // Hiiren siirto merkin päältä.
            ToolTip1.Hide(Pakollinen1);
        }

        private void label2_MouseHover(object sender, EventArgs e)
        {   // Hiiren vienti sukupuolen perässä olevaan merkkiin.
            ToolTip1.Show("Pakollinen", Pakollinen2);
        }

        private void label2_MouseLeave(object sender, EventArgs e)
        {   // Hiiren siirto merkin päältä.
            ToolTip1.Hide(Pakollinen2);
        }


        // open, save, exit ja sort by painikkeet, ja mouseup, jotta validointi taas päälle.

        private void btnLisää_Click(object sender, EventArgs e)
        {       // Lisää nappi, heittää messageboxin jos jokin pakollinen kenttä on tyhjä.

            if (tbEtunimi.Text == "" || tbSukunimi.Text == "" || cbSukupuoli.Text == "")
            {


                MessageBox.Show("Täytä pakolliset kentät", "Virhe", MessageBoxButtons.OK);
            }
            else
            {
                Henkilö a;
                a.etunimi = tbEtunimi.Text;
                a.sukunimi = tbSukunimi.Text;
                a.sukupuoli = cbSukupuoli.Text;
                if (tbIkä.Text == "")
                    tbIkä.Text = "0";
                a.ikä = int.Parse(tbIkä.Text);
                DateTime.TryParse(tbSaika.Text, out a.syntymäaika);
                a.syntymäpaikka = tbSpaikka.Text;
                if (tiedot == null)
                    tiedot = new List<Henkilö>();
                tiedot.Add(a);
                Datanäyttö.DataSource = null;
                Datanäyttö.DataSource = tiedot;
                Datanäyttö.Refresh();
            }
        }

        private void openToolStripMenuItem1_Click(object sender, EventArgs e)
        {   // Open, autovalidate pois ja tiedot datagridviewiin.
            AutoValidate = AutoValidate.Disable;
            tiedot = DeserializeJSON();
            Datanäyttö.DataSource = tiedot;
            Datanäyttö.Refresh();
        }

        private void openToolStripMenuItem1_MouseUp(object sender, MouseEventArgs e)
        {   // Open napin päältä napin nosto: autovalidate päälle taas.
            AutoValidate = AutoValidate.EnablePreventFocusChange;
        }




        private void saveToolStripMenuItem_Click(object sender, EventArgs e)
        {   // Save, autovalidate pois ja tietojen tallentaminen.
            AutoValidate = AutoValidate.Disable;
            SerializeJSON(tiedot);
            toolStripStatusLabel1.Text = "Tallennettu";
        }

        private void saveToolStripMenuItem_MouseUp(object sender, MouseEventArgs e)
        {   // Save napin päältä napin nosto: autovalidate päälle taas.
            AutoValidate = AutoValidate.EnablePreventFocusChange;
        }




        private void exitToolStripMenuItem_Click(object sender, EventArgs e)
        {   // Exit nappi menubaarissa. Ohjelman sulkeminen.
            AutoValidate = AutoValidate.Disable;
                Close();
        }

        bool r1 = true;

        private void alphabeticalToolStripMenuItem_Click(object sender, EventArgs e)
        {    // Listan järjestäminen etunimen mukaan. Toisella painalluksella käänteisesti.
            if (r1)
            {
                tiedot.Sort((x, y) => String.Compare(x.Etunimi, y.Etunimi));
                r1 = false;
                Datanäyttö.DataSource = null;
                Datanäyttö.DataSource = tiedot;
                Datanäyttö.Refresh();
                toolStripStatusLabel1.Text = "Järjestetty";
            }

            else
            {
                tiedot.Sort((x, y) => String.Compare(y.Etunimi, x.Etunimi));
                r1 = true;
                Datanäyttö.DataSource = null;
                Datanäyttö.DataSource = tiedot;
                Datanäyttö.Refresh();
                toolStripStatusLabel1.Text = "Järjestetty käänteisesti";
            }
        }

        private void alphabeticalToolStripMenuItem_MouseUp(object sender, MouseEventArgs e)
        {   // Alphabetical napin päältä napin nosto: autovalidate päälle taas.
            AutoValidate = AutoValidate.EnablePreventFocusChange;
        }




        bool r2 = true;

        private void dateOfBirthToolStripMenuItem_Click(object sender, EventArgs e)
        {   // Listan järjestäminen syntymäajan mukaan. Toisella painalluksella käänteisesti.

            if (r2)
            {
                tiedot.Sort((a, b) => a.Syntymäaika.CompareTo(b.Syntymäaika));
                r2 = false;
                Datanäyttö.DataSource = null;
                Datanäyttö.DataSource = tiedot;
                Datanäyttö.Refresh();
                toolStripStatusLabel1.Text = "Järjestetty";
            }
            else
            {
                tiedot.Sort((a, b) => b.Syntymäaika.CompareTo(a.Syntymäaika));
                r2 = true;
                Datanäyttö.DataSource = null;
                Datanäyttö.DataSource = tiedot;
                Datanäyttö.Refresh();
                toolStripStatusLabel1.Text = "Järjestetty käänteisesti";
            }
        }

        private void dateOfBirthToolStripMenuItem_MouseUp(object sender, MouseEventArgs e)
        {   // Date of birth napin päältä napin nosto: autovalidate päälle taas.
            AutoValidate = AutoValidate.EnablePreventFocusChange;
        }




        private void helpToolStripMenuItem_Click(object sender, EventArgs e)
        {   // Help: antaa ohjeet toimintoja varten messageboxiin.
            MessageBox.Show("Open:" + "\n" + "\t" + "Avaa tiedoston siinä kunnossa, kuin se viimeksi on tallennettu." + "\n" + 
                "Save:" + "\n"+ "\t" + "Tallentaa tiedoston kaikkine tehtyine muutoksineen." + "\n" +
                "Sort by:" + "\n" + "\t" + "Järjestää henkilötiedot aakkos- tai syntymäaika järjestyksessä." + "\n" + 
                "Pakolliset tekstikentät:" + "\n" + "\t" + "Tekstikentät: Etunimi, Sukunimi ja Sukupuoli, ovat pakollisia" + "\n" + "\t" + 
                "ja listaan voi lisätä vain tietoa, joissa ainakin nämä kentät on täytetty." + "\n" +
                "Tietojen poisto ja muokkaus:" + "\n" +  "\t" + "Kun clikkaat rivin päätyä, rivi poistuu ja tiedot palaavat tekstikenttiin." + "\n" + "\t" + "" +
                "Kun clikkaat yksittäistä tietosolua, tiedot palaavat tekstikenttiin" + "\n" + "\t" + " ja pääset suoraan muokkaamaan clikkaamaasi tietoa.", "Help", MessageBoxButtons.OK);
        }

    }
}

