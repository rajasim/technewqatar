import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl xl:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: December 2025</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                These Terms and Conditions constitute a legally binding agreement between you and Technewqatar 
                ("Company," "we," "us," or "our") concerning your access to and use of our website and services.
              </p>
              <p>
                By accessing or using our website, you agree that you have read, understood, and agree to be bound 
                by these Terms and Conditions. If you do not agree with these terms, you are prohibited from using 
                or accessing this website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use of Website</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This website is intended to provide information about Technewqatar's construction services, projects, 
                and capabilities. You may use the website for lawful purposes only and in accordance with these Terms.
              </p>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the website in any way that violates any applicable law or regulation</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the website</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Use the website to transmit any harmful or malicious code</li>
                <li>Collect or harvest any information from the website without our permission</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Unless otherwise indicated, the website and all content, features, and functionality (including but 
                not limited to text, graphics, logos, images, and software) are owned by Technewqatar and are 
                protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit 
                any content from the website without our prior written permission.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Services and Project Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Information about our construction services, projects, and capabilities is provided for general 
                informational purposes only. While we strive to keep the information accurate and up-to-date, we 
                make no representations or warranties of any kind about the completeness or accuracy of the information.
              </p>
              <p>
                Any reliance you place on such information is strictly at your own risk. For specific project 
                requirements and proposals, please contact us directly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Submissions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                By submitting any information through our contact forms, career applications, or other communication 
                channels, you grant us the right to use, reproduce, and process such information for the purposes of:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responding to your inquiries and providing requested services</li>
                <li>Processing project proposals and quotations</li>
                <li>Evaluating employment applications</li>
                <li>Improving our services and website</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The website may contain links to third-party websites or services that are not owned or controlled 
                by Technewqatar. We have no control over and assume no responsibility for the content, privacy policies, 
                or practices of any third-party websites or services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disclaimer of Warranties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The website is provided on an "as is" and "as available" basis. Technewqatar makes no warranties, 
                expressed or implied, regarding the website's operation or the information, content, or materials 
                included on the website.
              </p>
              <p>
                We do not warrant that the website will be uninterrupted, secure, or error-free, or that defects 
                will be corrected.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                To the fullest extent permitted by applicable law, Technewqatar shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether 
                incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses 
                resulting from your access to or use of the website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the 
                State of Qatar, without regard to its conflict of law provisions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We reserve the right to modify or replace these Terms and Conditions at any time. If a revision is 
                material, we will provide notice on the website. Your continued use of the website following the 
                posting of revised Terms means that you accept and agree to the changes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p><strong>Technewqatar</strong></p>
                <p>Doha, Qatar</p>
                <p>Email: info@techneqatar.com</p>
                <p>Phone: +974 XXXX XXXX</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
