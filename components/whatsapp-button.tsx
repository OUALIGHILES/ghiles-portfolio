"use client";

import { useCallback, useEffect, useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";

interface WhatsAppButtonProps {
  /** Numéro de téléphone avec indicatif pays, sans espaces ni caractères spéciaux */
  phoneNumber: string;
  /** Message pré-rempli par défaut (optionnel) */
  defaultMessage?: string;
  /** État en ligne (optionnel) */
  isOnline?: boolean;
  /** Position depuis le bas (en pixels ou unités CSS) */
  bottomOffset?: string;
  /** Position depuis la droite (en pixels ou unités CSS) */
  rightOffset?: string;
}

export function WhatsAppButton({
  phoneNumber = "213672810933",
  defaultMessage = "Bonjour, je vous contacte depuis votre portfolio.",
  isOnline = true,
  bottomOffset = "3rem",
  rightOffset = "3rem"
}: WhatsAppButtonProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);

  // Détection mobile pour choisir la bonne URL
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSendMessage = useCallback(() => {
    const encodedMessage = encodeURIComponent(message);
    // Utilise l'API mobile ou web selon le device
    const url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
    setIsDialogOpen(false);
  }, [phoneNumber, message, isMobile]);

  return (
    <>
      <button
        onClick={() => setIsDialogOpen(true)}
        className="fixed group z-50 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl focus:shadow-xl hover:-translate-y-1 focus:-translate-y-1 transition-all duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        style={{ bottom: bottomOffset, right: rightOffset }}
        aria-label="Ouvrir la boîte de dialogue WhatsApp"
        role="button"
        tabIndex={0}
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
        </svg>
        {isOnline && (
          <span 
            className="absolute top-0 right-0 w-4 h-4 md:w-5 md:h-5 bg-green-400 border-2 border-white rounded-full"
            aria-hidden="true"
          />
        )}
      </button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] gap-0">
          <div className="flex items-center gap-4 p-4 bg-[#25D366]/10 rounded-t-lg -mt-4 -mx-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
              </div>
              {isOnline && (
                <span 
                  className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"
                  aria-hidden="true"
                />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg">Ghiles Ouali</h3>
              <p className="text-sm text-muted-foreground">
                {isOnline ? 'En ligne' : 'Hors ligne'}
              </p>
            </div>
          </div>

          <div className="p-4 -mx-4 space-y-4">
            <Textarea
              placeholder="Tapez votre message..."
              className="min-h-[100px] resize-none focus:ring-[#25D366]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              className="w-full bg-[#25D366] hover:bg-[#20B859] group"
              onClick={handleSendMessage}
            >
              <span>Envoyer sur WhatsApp</span>
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="text-center text-xs text-muted-foreground mt-2">
            Vous serez redirigé vers WhatsApp pour envoyer votre message
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}